import React, { useEffect, useMemo } from 'react'
import { useWrappedConnection } from '@/hooks/solana/useWrappedConnection.tsx'
import { PublicKey } from '@solana/web3.js'

export function AccountSignatures({ address }: { address: string }) {
  const rpcUrl = 'https://api.devnet.solana.com' // ou issu d’un context/config
  const wrappedConnection = useWrappedConnection(rpcUrl)

  // Le miroir immuable, ne changeant que si 'address' change
  const publicKey = useMemo(() => new PublicKey(address), [address])

  useEffect(() => {
    wrappedConnection.rpc.getSignaturesForAddress(publicKey).send()
      .then((signatures: any) => {
        console.log('Signatures:', signatures)
      })
      .catch(console.error)
  }, [wrappedConnection, publicKey])

  return <div>Check console for signatures</div>
}
