// src/hooks/useSolanaClient.ts
import { useMemo } from 'react'
import { getSolanaClient } from '@/lib/solana/getSolanaClient.tsx'

export function useSolanaClient() {
  return useMemo(() => getSolanaClient(), [])
}
