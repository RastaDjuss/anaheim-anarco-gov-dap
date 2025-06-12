'use client'

import { TOKEN_2022_PROGRAM_ADDRESS, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token'

import { getTransferSolInstruction } from 'gill/programs'
import {
  address,
  Address,
  airdropFactory,
  appendTransactionMessageInstruction,
  assertIsTransactionMessageWithSingleSendingSigner,
  Blockhash, ClusterUrl,
  createTransactionMessage,
  getBase58Decoder,
  lamports,
  pipe,
  RpcFromTransport, RpcSubscriptions,
  RpcTransportFromClusterUrl, SendAndConfirmTransactionWithSignersFunction,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signAndSendTransactionMessageWithSigners, SimulateTransactionFunction,
  SolanaClient,
  SolanaRpcApiFromTransport,
  SolanaRpcSubscriptionsApi,
  TransactionSendingSigner,
} from 'gill'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTransactionToast } from '@/components/use-transaction-toast'
import { toast } from 'sonner'
import { useWalletUi, useWalletUiCluster } from '../wallet/wallet-hooks'
import { Connection, PublicKey } from '@solana/web3.js'
import { ClusterDisplay } from '@/hooks/useSolanaClient'
import { useMemo } from 'react'
import { undefined } from 'zod'

export type SolanaClient<TClusterUrl extends ClusterUrl> = {
  rpc: RpcFromTransport<SolanaRpcApiFromTransport<RpcTransportFromClusterUrl<TClusterUrl>>, RpcTransportFromClusterUrl<TClusterUrl>>
  rpcSubscriptions: RpcSubscriptions<SolanaRpcSubscriptionsApi> & TClusterUrl
  sendAndConfirmTransaction: SendAndConfirmTransactionWithSignersFunction
  simulateTransaction: SimulateTransactionFunction
}
let client: SolanaClient<string>
client = new SolanaClient ( {
  endpoint: 'https://api.devnet.solana.com',
  // options...
} )

// Fournis ce `client` enrichi via ton contexte wallet UI

let toPublicKey: (address: Address) => PublicKey
toPublicKey = (address: Address): PublicKey => new PublicKey ( address )

// Types
type WalletAccount = any;

/**
 * Récupère un signer capable d’envoyer des transactions signées,
 * selon le cluster actif et le compte du wallet utilisateur.
 */

export default function Dashboard() {
  return (
    <div>
      <ClusterDisplay clusterLabel="devnet" />
    </div>
  );
}

// --- Use solana Connection for simple RPC calls (no `.rpc`) ---
export function useGetBalance({ address }: { address: PublicKey }) {
  const connection = new Connection('https://api.devnet.solana.com')

  return useQuery({
    queryKey: ['get-balance', address.toBase58()],
    queryFn: () => connection.getBalance(address),
  })
}

// --- Use client.rpc if client exposes it properly ---
// S'assurer que client est bien SolanaClient avec .rpc exposé

export function useGetSignatures({ address }: { address: PublicKey }) {
  const { cluster } = useWalletUiCluster()
  const { client } = useWalletUi() // client est un Connection ?

  if (!client) {
    throw new Error('Client is undefined — verify your client setup')
  }

  return useQuery({
    queryKey: ['get-signatures', { cluster, address }],
    queryFn: () => client.getSignaturesForAddress(address),
  })
}
export function useGetTokenAccounts({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster()
  const { client } = useWalletUi()

  if (!client.rpc) {
    throw new Error('client.rpc is undefined — verify your client setup')
  }

  return useQuery({
    queryKey: ['get-token-accounts', { cluster, address }],
    queryFn: () => {
      return Promise.all ( [
        client.getTokenAccountsByOwner(
          toPublicKey(address),
          { mint: undefined, programId: TOKEN_PROGRAM_ADDRESS },
          {
            commitment: 'confirmed',
            encoding: 'jsonParsed',
          }
        ).then(res => res.value ?? []),

        client.getTokenAccountsByOwner(
          toPublicKey(address),
          { mint: undefined, programId: TOKEN_2022_PROGRAM_ADDRESS },
          {
            commitment: 'confirmed',
            encoding: 'jsonParsed',
          }
        ).then(res => res.value ?? []),

      ] ).then ( ([a, b]) => [...a, ...b] )
    },
  })
}

// -- Mutation: transfert SOL -- //

function useWalletAccountTransactionSendingSigner(label: string) {

}

export function useTransferSol({
                                 address,
                                 account,
                               }: {
  address: Address
  account: WalletAccount
}) {
  const { cluster } = useWalletUiCluster()
  const { client } = useWalletUi()
  const toastTransaction = useTransactionToast()

 //   * Récupère un signer capable d’envoyer des transactions signées,
// * selon le cluster actif et le compte du wallet utilisateur.
// //
  export function useWalletAccountTransactionSendingSigner(label: string): TransactionSendingSigner {
    let account: any, signer: TransactionSendingSigner<string>
    ({ account } = useWalletUi ())
    signer = useMemo ( () => {
      if (!account) {
        throw new Error ( 'Aucun compte wallet connecté.' )
      }

      const txSigner: TransactionSendingSigner = {
        address: account.address,
        signTransaction: account.signTransaction, // assume `signTransaction()` est exposé par `account`
      }

      return txSigner
    }, [account, label] )

    return signer
  }

  const txSigner = useWalletAccountTransactionSendingSigner ( cluster.label ),
    queryClient = useQueryClient ()
  if (client.rpc) {
    return useMutation ( {
      mutationKey: ['transfer-sol', { cluster, address }],
      mutationFn: async (input: { destination: Address; amount: number }) => {
        try {
          const { signature } = await createTransaction ( {
            txSigner,
            destination: input.destination,
            amount: input.amount,
            client,
          } )

          console.log ( signature )
          return signature
        } catch (error: unknown) {
          console.error ( 'Transaction failed:', error )
          throw error
        }
      },
      onSuccess: async (signature) => {
        if (signature?.length) {
          toastTransaction ( signature )
        }
        await Promise.all ( [
          queryClient.invalidateQueries ( {
            queryKey: ['get-balance', { cluster, address }],
          } ),
          queryClient.invalidateQueries ( {
            queryKey: ['get-signatures', { cluster, address }],
          } ),
        ] )
      },
      onError: (error) => {
        toast.error ( `Transaction failed! ${error}` )
      },
    } )
  } else {
    throw new Error ( 'client.rpc is undefined — verify your client setup' )
  }
}

// -- Mutation: demande d'airdrop (devnet) -- //

export function useRequestAirdrop({ address }: { address: Address }) {
  const { cluster } = useWalletUiCluster()
  const { client } = useWalletUi()
  const queryClient = useQueryClient()
  const toastTransaction = useTransactionToast()
  const airdrop = airdropFactory(client)

  const { rpc } = client
  if (rpc) {
    return useMutation ( {
      mutationKey: ['airdrop', { cluster, address }],
      mutationFn: async (amount: number = 1) =>
        airdrop ( {
          commitment: 'confirmed',
          recipientAddress: address,
          lamports: lamports ( BigInt ( Math.round ( amount * 1_000_000_000 ) ) ),
        } ),
      onSuccess: async (signature) => {
        toastTransaction ( signature )
        await Promise.all ( [
          queryClient.invalidateQueries ( { queryKey: ['get-balance', { cluster, address }] } ),
          queryClient.invalidateQueries ( { queryKey: ['get-signatures', { cluster, address }] } ),
        ] )
      },
    } )
  } else {
    throw new Error ( 'client.rpc is undefined — verify your client setup' )
  }
}

// -- Création & signature transaction -- //

async function createTransaction({
                                   amount,
                                   destination,
                                   client,
                                   txSigner,
                                 }: {
  amount: number
  destination: Address
  client: SolanaClient
  txSigner: TransactionSendingSigner
}): Promise<{
  signature: string
  latestBlockhash: {
    blockhash: Blockhash
    lastValidBlockHeight: bigint
  }
}> {
  if (!client.rpc) {
    throw new Error('client.rpc is undefined — verify your client setup')
  }

  const { value: latestBlockhash } = await client.rpc.getLatestBlockhash({ commitment: 'confirmed' }).send()

  const message = pipe(
    createTransactionMessage({ version: 0 }),
    (m) => setTransactionMessageFeePayerSigner(txSigner, m),
    (m) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, m),
    (m) =>
      appendTransactionMessageInstruction(
        getTransferSolInstruction({
          amount,
          destination: address(destination),
          source: txSigner,
        }),
        m,
      ),
  )

  assertIsTransactionMessageWithSingleSendingSigner(message)

  const signature = await signAndSendTransactionMessageWithSigners(message)

  return {
    signature: getBase58Decoder().decode(signature),
    latestBlockhash,
  }
}
