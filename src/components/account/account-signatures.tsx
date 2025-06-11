import React, { useEffect } from 'react'
import { useWrappedConnection } from '@/hooks/useWrappedConnection'
import { PublicKey } from '@solana/web3.js'

export function AccountSignatures({ address }: { address: string }) {
  const rpcUrl = 'https://api.devnet.solana.com' // ou issu d’un context/config
  const wrappedConnection = useWrappedConnection(rpcUrl)
  const publicKey = new PublicKey(address)

  useEffect(() => {
    wrappedConnection.rpc.getSignaturesForAddress(publicKey).send()
      .then(signatures => {
        console.log('Signatures:', signatures)
      })
      .catch(console.error)
  }, [wrappedConnection, publicKey])

  return <div>Check console for signatures</div>
}
