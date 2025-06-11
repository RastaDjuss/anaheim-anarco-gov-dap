// hooks/useGetSignatures.ts
import { useQuery } from '@tanstack/react-query'
import { Address } from './useGetBalance'
import { useWalletUi, useWalletUiCluster } from '@/components/wallet/wallet-hooks.js'

export function useGetSignatures({ address }: { address: Address }) {
  const { client } = useWalletUi () as unknown as { client: { rpc: any } } // ou mieux : typé proprement
  const { cluster } = useWalletUiCluster()

  if (!client.rpc) {
    throw new Error('client.rpc is undefined — verify your client setup')
  }

  return useQuery({
    queryKey: ['get-signatures', { cluster, address }],
    queryFn: () => client.rpc.getSignaturesForAddress(address).send(),
  })
}

