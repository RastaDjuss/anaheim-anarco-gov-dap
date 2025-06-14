 // src/app/stake/stake-page.tsx
'use client'

import { useEffect, useState } from 'react'
import { Connection, PublicKey, StakeActivationData } from '@solana/web3.js'
import { useSolanaClient } from '@/hooks/solana/useSolanaClient'
import { getStakeActivationSafe } from '@/components/stake/staking.tsx'

export default function StakePage() {
  const connection: Connection = useSolanaClient('devnet')
  const [activation, setActivation] = useState<StakeActivationData | null>(null)

  useEffect(() => {
    const fetch = async () => {
      const pubkey = new PublicKey('9xQeWvG816bUx9EPZ2gfrzjp1edw6uX7yjzFZZLL8Mjt')
      try {
        const data = await getStakeActivationSafe(connection)
        setActivation(data)
      } catch (err) {
        console.error('Stake fetch failed:', err)
      }
    }

    void fetch()
  }, [connection])

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold">Staking Status</h1>
      {activation ? (
        <pre className="mt-4 bg-gray-900 p-2 rounded">
          {JSON.stringify(activation, null, 2)}
        </pre>
      ) : (
        <p className="mt-2 text-sm text-gray-400">Loading…</p>
      )}
    </div>
  )
}
