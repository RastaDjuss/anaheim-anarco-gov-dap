import { useMemo } from 'react'
import { Connection } from '@solana/web3.js'
import { wrapConnectionWithRpc } from '@/lib/wrapConnectionWithRpc'

// Typage clair de la structure retournée par wrapConnectionWithRpc
type WrappedConnection = ReturnType<typeof wrapConnectionWithRpc>

export function useWrappedConnection(rpcUrl: string): WrappedConnection {
  const connection = useMemo(() => new Connection(rpcUrl, 'confirmed'), [rpcUrl])
  return useMemo ( () => wrapConnectionWithRpc ( connection ), [connection] )
}
