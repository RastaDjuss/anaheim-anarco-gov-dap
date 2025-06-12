declare module '@wallet-ui/react' {
  import * as React from 'react';

  export const useSolanaWallet: () => {
    connected: boolean;
    publicKey: string | null;
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
  };

  export interface WalletUiDropdownProps {
    onSelect?: (value: string) => void;
    selected?: string;
    options?: string[];
  }

  export const WalletUiDropdown: React.FC<WalletUiDropdownProps>;

  export interface WalletProviderProps {
    children: React.ReactNode;
    defaultCluster?: string;
    autoConnect?: boolean;
  }

  export interface WalletProviderState {
    connected?: boolean;
    walletName?: string;
  }

  export class WalletProvider extends React.Component<
    WalletProviderProps,
    WalletProviderState
  > {}

  export class useWalletUi {
    // à implémenter si utilisé
  }
}
