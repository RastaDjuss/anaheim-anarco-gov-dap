import React, { useEffect } from 'react'
import { PublicKey } from '@solana/web3.js'
import { useWrappedConnection } from '@/hooks/solana/useWrappedConnection.tsx'
import { getClusterUrl, ClusterLabel } from '@/lib/cluster'
import { ClusterDisplay } from './cluster/ClusterDisplay'

export function RpcDemo() {
  const clusterLabel: ClusterLabel = 'devnet'
  const rpcUrl = getClusterUrl(clusterLabel)
  const wrapped = useWrappedConnection(rpcUrl)

  useEffect(() => {
    const address = new PublicKey('9xQeWvG816bUx9EPZ2gfrzjp1edw6uX7yjzFZZLL8Mjt')
    wrapped.rpc.getSignaturesForAddress(address).send().then(console.log)
  }, [wrapped])

  return (
    <>
      <ClusterDisplay clusterLabel={clusterLabel} />
      <p>Check console for signatures on {rpcUrl}</p>
    </>
  )
}
