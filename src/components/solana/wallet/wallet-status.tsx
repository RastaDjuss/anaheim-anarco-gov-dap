'use client'

import {
  useSolanaWalletAddress,
  useSolanaWalletCluster,
} from '@wallet-ui/react'

export function WalletStatus() {
  const walletAddressInstance = new useSolanaWalletAddress()
  const walletClusterInstance = new useSolanaWalletCluster()

  const address =
    walletAddressInstance?.toString?. () ?? 'Adresse inconnue'

  const cluster =
    walletClusterInstance?.toString?. () ?? 'Cluster inconnu'

  return (
    <div className="flex flex-col text-xs text-right leading-tight">
      <p className="text-neutral-600 dark:text-neutral-300 truncate max-w-[200px]">
        🧙 Adresse : <span className="font-mono">{address}</span>
      </p>
      <p className="text-neutral-500 dark:text-neutral-400">
        🌐 Cluster : {cluster}
      </p>
    </div>
  )
}
