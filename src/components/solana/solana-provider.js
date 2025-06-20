'use client';
import dynamic from 'next/dynamic';
import { createSolanaDevnet, createSolanaLocalnet, createWalletUiConfig, WalletUi } from '@wallet-ui/react';
import '@wallet-ui/tailwind/index.css';
export const WalletButton = dynamic(async () => (await import('@wallet-ui/react')).WalletUiDropdown, {
    ssr: false,
});
export const ClusterButton = dynamic(async () => (await import('@wallet-ui/react')).WalletUiClusterDropdown, {
    ssr: false,
});
const config = createWalletUiConfig({
    clusters: [createSolanaDevnet(), createSolanaLocalnet()],
});
export function SolanaProvider({ children }) {
    return <WalletUi config={config}>{children}</WalletUi>;
}
