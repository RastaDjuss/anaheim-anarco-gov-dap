'use client'

import { useEffect } from 'react'
import { PublicKey } from '@solana/web3.js'
import { useSolanaClient } from '@/hooks/solana/useSolanaClient'

export function StakeInfo() {
  const solana = useSolanaClient()

  useEffect(() => {
    const pubkey = new PublicKey('TON_ADRESSE_DE_STAKE')

    solana.getStakeActivation(pubkey).then(data => {
      console.log('Stake activation:', data)
    })
  }, [])

  return <div>Stake info en console</div>
}
