// src/components/wallet/wallet-dropdown.tsx
'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../ui/dropdown-menu'

export function WalletDropdown() {
  const { publicKey, disconnect } = useWallet()

  if (!publicKey) return null

  const shortKey = publicKey.toBase58().slice(0, 4) + '...' + publicKey.toBase58().slice(-4)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full px-3">
          {shortKey}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => disconnect()}>Disconnect</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
