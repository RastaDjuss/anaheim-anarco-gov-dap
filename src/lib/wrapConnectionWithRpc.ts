// lib/wrapConnectionWithRpc.ts
import { Connection, PublicKey, Commitment } from '@solana/web3.js'

export const wrapConnectionWithRpc = (connection: () => Promise<void>) => ({
  ...connection,
  rpc: {
    getSignaturesForAddress: (address: PublicKey) => ({
      send: () => connection.getSignaturesForAddress(address),
    }),
    getTokenAccountsByOwner: (
      address: PublicKey,
      filter: { programId: PublicKey },
      options: { commitment: Commitment; encoding: 'jsonParsed' },
    ) => ({
      send: () => connection.getTokenAccountsByOwner(address, filter, options),
    }),
    getLatestBlockhash: (commitment?: Commitment) => ({
      send: () => connection.getLatestBlockhash(commitment),
    }),
  },
  getBlockHeight: (commitment?: Commitment) => connection.getBlockHeight(commitment),
})
