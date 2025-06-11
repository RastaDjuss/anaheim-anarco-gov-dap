'use client'

import dynamic from 'next/dynamic'
import { ReactNode, useEffect } from 'react'
import {
  createSolanaDevnet,
  createSolanaLocalnet,
  createWalletUiConfig,
  WalletUi
} from '@wallet-ui/react'
import '@wallet-ui/tailwind/index.css'

import { generateClientSubscriptionId } from '@/lib/ClientSubscriptionId.ts'
import useSolanaClient from '@/hooks/useSolanaClient.tsx'
import { wrapConnectionWithRpc } from '@/lib/wrapConnectionWithRpc'
import { connection } from 'next/server.js'

// après avoir instancié `connection`
const wrapped = wrapConnectionWithRpc ( connection )

// ✅ No "new", it's a plain function
const config = createWalletUiConfig({
  clusters: [createSolanaDevnet(), createSolanaLocalnet()],
})

// ✅ If WalletUi is a function component, not a class-based one
export function SolanaProvider({ children }: { children: ReactNode }) {
  const { connection, walletPublicKey } = useSolanaClient()

  useEffect(() => {
    if (!connection || !walletPublicKey) return

    const subId = generateClientSubscriptionId('balance-sub')

    const subscribe = async () => {
      const subscriptionId = await connection.onAccountChange(
        walletPublicKey,
        (accountInfo: import('@solana/web3.js').AccountInfo<Buffer>) => {
          console.log(`Account ${walletPublicKey.toBase58()} changed:`, accountInfo)
        },
        'confirmed'
      )
      console.log(`Subscribed with ID: ${subId} → ${subscriptionId}`)
    }

    void subscribe()

    return () => {
      // connection.removeAccountChangeListener(subscriptionId) — optionnel
    }
  }, [connection, walletPublicKey])

  return <WalletUi config={config}>{children}</WalletUi>
}

// ✅ Dynamic imports for buttons if SSR breaks UI
export const WalletButton = dynamic(
  () => import('@wallet-ui/react').then((m) => m.WalletUiDropdown),
  { ssr: false }
)

export const ClusterButton = dynamic(
  () => import('@wallet-ui/react').then((m) => m.WalletUiClusterDropdown),
  { ssr: false }
)
