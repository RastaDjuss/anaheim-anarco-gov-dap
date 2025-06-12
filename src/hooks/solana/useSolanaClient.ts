// src/hooks/solana/useSolanaClient.ts
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import { useMemo } from 'react'

export function useSolanaClient(cluster: 'devnet' | 'testnet' | 'mainnet-beta' = 'devnet') {
  // 🔁 Memoize connection to avoid re-instantiating on each render
  return useMemo ( () => {
    return new Connection ( clusterApiUrl ( cluster ), 'confirmed' )
  }, [cluster] )
}


// TODO: future fallback for deprecated getStakeActivation
export async function getStakeActivationManual(connection: Connection, pubkey: PublicKey) {
  const accountInfo = await connection.getParsedAccountInfo(pubkey)
  const parsed = accountInfo.value?.data

  if (!parsed || typeof parsed !== 'object' || !('parsed' in parsed)) {
    throw new Error('Invalid or empty stake account')
  }

  const stake = (parsed as any).parsed.info.stake
  const active = stake.delegation.stake
  const state = (parsed as any).parsed.info.state

  return {
    state,
    active,
    inactive: 0, // manuellement, on ne peut pas l’estimer sans epoch info
  }
}
