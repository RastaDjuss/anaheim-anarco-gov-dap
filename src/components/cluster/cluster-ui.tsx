'use client'

import { useQuery } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { getExplorerLink, GetExplorerLinkArgs } from 'gill'
import { Button } from '@/components/ui/button'
import { AppAlert } from '@/components/app-alert'
import { useWalletUi, useWalletUiCluster } from '@/components/wallet/wallet-hooks'
import { useClusterConfig, ClusterLabel } from '@/hooks/getClusterConfig'

export function ClusterDisplay({ clusterLabel }: { clusterLabel: ClusterLabel }) {
  const config = useClusterConfig(clusterLabel)

  return (
    <div className="text-xs text-gray-300">
      Cluster: <span className="font-semibold">{config.label}</span><br />
      Endpoint: <code className="text-yellow-400">{config.urlOrMoniker}</code>
    </div>
  )
}
export function ExplorerLink({
                               className,
                               label = '',
                               ...link
                             }: GetExplorerLinkArgs & {
  className?: string
  label: string
}) {
  return (
    <a
      href={getExplorerLink(link)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? 'link font-mono'}
    >
      {label}
    </a>
  )
}

export function ClusterChecker({ children }: { children: ReactNode }) {
  const { client } = useWalletUi()
  const { cluster } = useWalletUiCluster()

  const query = useQuery({
    queryKey: ['version', { cluster, endpoint: cluster.urlOrMoniker }],
    queryFn: () => client.getVersion(),
    retry: 1,
  })

  if (query.isLoading) return null

  if (query.isError || !query.data) {
    return (
      <AppAlert
        action={
          <Button variant="outline" onClick={() => query.refetch()}>
            Refresh
          </Button>
        }
      >
        Error connecting to cluster <span className="font-bold">{cluster.label}</span>.
      </AppAlert>
    )
  }

  return <>{children}</>
}
