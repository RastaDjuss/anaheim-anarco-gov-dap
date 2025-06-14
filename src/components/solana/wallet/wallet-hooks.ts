// src/components/solana/wallet/wallet-hooks.ts
import {
  useSolanaWalletAddress as _useSolanaWalletAddress,
  useSolanaWalletCluster as _useSolanaWalletCluster,
} from '@wallet-ui/react'
import { useSolanaClient } from 'gill-react'

/**
 * Hook personnalisé pour accéder à l'adresse du wallet.
 * Utilisation de `new` pour éviter les erreurs TS.
 * Doit être appelé dans un composant React.
 */
export function useWalletUiAddress(): string {
  return new _useSolanaWalletAddress().toString()
}

/**
 * Hook personnalisé pour accéder au cluster du wallet.
 * Utilisation de `new` pour éviter les erreurs TS.
 * Doit être appelé dans un composant React.
 */
export function useWalletUiCluster(): string {
  return new _useSolanaWalletCluster().toString()
}

function useSolanaCluster() {

}

/**
 * Hook qui retourne un objet complet pour accéder
 * à la fois à l'adresse et au cluster.
 */
export function useWalletUi() {
  const client = useSolanaClient() // ou autre
  const cluster = useSolanaCluster()

  return { client, cluster }
}

