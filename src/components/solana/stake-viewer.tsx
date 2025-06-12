import React, { useState, useEffect } from 'react'
import { Connection, PublicKey, clusterApiUrl, GetStakeActivationConfig, StakeActivationData } from '@solana/web3.js'

export function StakeViewer({ pubkey }: { pubkey: PublicKey }) {
  const [data, setData] = useState<StakeActivationData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!pubkey) return

    const connection = new Connection(clusterApiUrl('devnet'))
    const config: GetStakeActivationConfig = { commitment: 'confirmed' }

    async function fetchStakeActivation() {
      try {
        const anyConnection = connection as any
        const activation = await anyConnection.getStakeActivation(pubkey, config)
        setData(activation)
      } catch (e) {
        setError('Erreur lors de la récupération des données de stake activation')
        console.error(e)
      }
    }

    fetchStakeActivation().catch(() => {})  // <= Ici le patch magique
  }, [pubkey])

  if (error) return <p>{error}</p>

  return (
    <div>
      {data ? (
        <>
          <p>Stake state: {data.state}</p>
          <p>Active: {data.active.toString()}</p>
          <p>Inactive: {data.inactive.toString()}</p>
        </>
      ) : (
        <p>Loading stake info...</p>
      )}
    </div>
  )
}
