import { useEffect } from 'react'
import { useSolanaClient } from '@/hooks/solana/useSolanaClient.tsx'
import { PublicKey } from '@solana/web3.js'

export function StakeWatcher({ address }: { address: string }) {
  const client = useSolanaClient()
  const pubkey = new PublicKey(address)

  useEffect(() => {
    const id = client.onAccountChange(pubkey, (info) => {
      console.log('Stake changed:', info)
    })

    return () => {
      client.removeAccountChangeListener(id).catch(console.error)
    }
  }, [client, pubkey])

  return null
}
