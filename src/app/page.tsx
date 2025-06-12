// src/app/page.tsx
import React from 'react'
import { DashboardFeature } from '@/components/dashboard/dashboard-feature'
import { DebugConstants } from '@/components/DebugConstants'

export default function Home() {
  return (
    <main>
      <h1>Bienvenue dans Anaheim Putsch</h1>
      <DashboardFeature />
      <DebugConstants />
    </main>
  )
}
