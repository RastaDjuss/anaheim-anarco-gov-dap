// asrc/hooks/solana/useSolanaClient.ts
import {
  StakeActivationData,
  PublicKey,
  Commitment,
  RpcResponseAndContext,
  VoteAccountStatus,
  GetStakeMinimumDelegationConfig,
} from '@solana/web3.js';
import { connection } from 'next/server.js'

export default function useSolanaClient() {
  // ... assume connection and rpcEndpoint are defined as before

  return {
    // ... toutes les autres méthodes

    /**
     * Interroge l’activation d’une clé de stake, son statut dans le grand cycle des epochs.
     */
    async getStakeActivation(
      publicKey: PublicKey,
      commitmentOrConfig?: Commitment | { commitment?: Commitment },
      epoch?: number
    ): Promise<StakeActivationData> {
      return await connection.getStakeActivation(publicKey, commitmentOrConfig, epoch);
    },

    /**
     * Renvoie les comptes de vote actifs, un reflet des nœuds gardiens de la démocratie décentralisée.
     */
    async getVoteAccounts(commitment?: Commitment): Promise<VoteAccountStatus> {
      return await connection.getVoteAccounts(commitment);
    },

    /**
     * Minimum obligatoire pour déléguer du stake, seuil minimal pour franchir le portail.
     */
    async getStakeMinimumDelegation(config?: GetStakeMinimumDelegationConfig | Commitment): Promise<RpcResponseAndContext<number>> {
      return await connection.getStakeMinimumDelegation(config);
    },

    /**
     * Ajoute ici d’autres méthodes liées au staking, par exemple la délégation, la désactivation, les récompenses.
     * Certaines opérations plus complexes nécessiteront d'interagir avec les programmes spécifiques comme
     * `stake-program` ou `spl-stake-pool` si tu vises le pooling.
     */

    /**
     * Note importante : La création et la gestion de pools de liquidité ou de staking complexes
     * impliquent d’interagir avec les smart contracts (programs) de Jupiter ou autres DEX.
     * Ce n’est pas natif dans `Connection`, il te faudra des SDKs dédiés, ou écrire les transactions toi-même.
     */
  }
}
