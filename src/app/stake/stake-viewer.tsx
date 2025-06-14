// src/app/stake/page.tsx
import React from 'react'
import { StakeViewer } from '../../components/stake/stake-viewer'
import { PublicKey } from '@solana/web3.js'

const examplePubkey = new PublicKey('PUT_A_VALID_ADDRESS_HERE')

export default function StakePage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <StakeViewer pubkey={examplePubkey} />
    </div>
  )
}
