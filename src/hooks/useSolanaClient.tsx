import React, { useEffect } from 'react'
import { PublicKey } from '@solana/web3.js'
import { useWrappedConnection } from '@/hooks/useWrappedConnection'
import { clusterApiUrl, Cluster } from '@solana/web3.js'
import { useClusterConfig, ClusterLabel } from './getClusterConfig.js'

export function ClusterDisplay({ clusterLabel }: { clusterLabel: ClusterLabel }) {
  const config = useClusterConfig(clusterLabel)

  return (
    <div className="cluster-display">
      Cluster URL: {config.urlOrMoniker} <br />
      Label: {config.label}
    </div>
  )
}

function getClusterConfig(clusterLabel: string): { urlOrMoniker: Cluster; label: string } {
  switch (clusterLabel) {
    case 'mainnet':
      return { urlOrMoniker: 'mainnet-beta', label: 'mainnet' }
    case 'devnet':
      return { urlOrMoniker: 'devnet', label: 'devnet' }
    case 'testnet':
      return { urlOrMoniker: 'testnet', label: 'testnet' }
    default:
      return { urlOrMoniker: 'devnet', label: 'devnet' }
  }
}

function getClusterUrl(clusterLabel: string): string {
  const config = getClusterConfig(clusterLabel)
  return clusterApiUrl(config.urlOrMoniker)
}

// Exporte et utilise ce composant dans ta page React
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
