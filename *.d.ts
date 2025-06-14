// dans un fichier *.d.ts par exemple
import 'gill-react';

declare module 'gill-react' {
  interface SolanaClient {
    _connection?: {
      rpcEndpoint: string;
    }
  }
}
