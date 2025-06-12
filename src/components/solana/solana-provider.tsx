// src/components/solana/solana-provider.tsx
'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import '@wallet-ui/tailwind/index.css'
import * as WalletUI from '@wallet-ui/react'

// Le init ne prend pas d'argument, on l'appelle donc simplement sans passer config
const maybeInit = (WalletUI as any)?.WalletUi?.init as (() => void) | undefined

if (typeof maybeInit === 'function') {
  maybeInit()
}

export function SolanaProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export const WalletButton = dynamic(
  () =>
    import('@wallet-ui/react').then(
      (m: { WalletUiDropdown: React.ComponentType<any> }) => m.WalletUiDropdown,
    ),
  { ssr: false },
)

export const ClusterButton = dynamic(
  () =>
    import('@wallet-ui/react').then(
      (m: { WalletUiClusterDropdown: React.ComponentType<any> }) =>
        m.WalletUiClusterDropdown,
    ),
  { ssr: false },
)
