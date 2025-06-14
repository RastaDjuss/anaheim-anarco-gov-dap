import { useQuery } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { AppAlert } from '@/components/app-alert'
import { useSolanaClient } from 'gill-react'

// 🚨 Ces hooks doivent être utilisés avec `new` selon ta contrainte
import { useWalletUi } from '@/hooks/wallet/wallet-hooks.ts'
import { useWalletUiCluster } from '@/hooks/wallet/wallet-hooks.ts'
console.log('WalletUI:', useWalletUi())

export function ClusterChecker({ children }: { children: ReactNode }) {
  const walletUi = useWalletUi()
  const cluster = useWalletUiCluster()

  const client = useSolanaClient()
  if (!client) {
    return (
      <AppAlert action={<Button variant="outline">Retry</Button>}>
        Solana client unavailable — connection impossible.
      </AppAlert>

    )
  }

  // 💡 Tu dois extraire `label` et `urlOrMoniker` de `cluster`
  // Si cluster est typé faible, fais une vérification défensive :
  const label = (cluster as any).label ?? 'unknown'
  const endpoint = (cluster as any).urlOrMoniker ?? 'unknown'

  const query = useQuery({
    queryKey: ['version', { cluster: label, endpoint }],
    queryFn: () => client.rpc.getVersion(), // ✅ le chemin correct vers le client RPC
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
        Error connecting to cluster <span className="font-bold">{label}</span>.
      </AppAlert>
    )
  }

  return <>{children}</>
}
