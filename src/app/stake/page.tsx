'use client'

import { useEffect, useState } from 'react'
import { PublicKey } from '@solana/web3.js'
import { useSolanaClient } from '@/hooks/solana/useSolanaClient'

export default function StakePage() {
  const solana = useSolanaClient()
  const [activation, setActivation] = useState(null)

  useEffect(() => {
    const pubkey = new PublicKey('9xQeWvG816bUx9EPZ2gfrzjp1edw6uX7yjzFZZLL8Mjt')

    solana.getStakeActivation(pubkey).then(data => {
      console.log('Stake activation', data)
      setActivation(data)
    }).catch(console.error)
  }, [])

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold">Staking Status</h1>
      {activation ? (
        <pre className="mt-4 bg-gray-900 p-2 rounded">
          {JSON.stringify(activation, null, 2)}
        </pre>
      ) : (
        <p className="mt-2 text-sm text-gray-400">Loading stake status…</p>
      )}
    </div>
  )
}
