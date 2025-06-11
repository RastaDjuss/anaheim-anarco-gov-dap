import React, { useEffect } from 'react'
import { useWrappedConnection } from '@/hooks/useWrappedConnection'
import { PublicKey } from '@solana/web3.js'

export function Rapper() {
  const rpcUrl = 'https://api.devnet.solana.com'
  const wrapped = useWrappedConnection(rpcUrl)

  useEffect(() => {
    const address = new PublicKey('9xQeWvG816bUx9EPZ2gfrzjp1edw6uX7yjzFZZLL8Mjt')
    wrapped.rpc.getSignaturesForAddress(address).send().then(console.log)
  }, [wrapped])

  return <div>Check console for data</div>
}
