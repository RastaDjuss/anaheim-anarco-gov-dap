import {
  Connection,
  PublicKey,
  VoteAccountStatus,
  GetStakeMinimumDelegationConfig,
  Commitment,
  RpcResponseAndContext,
} from '@solana/web3.js';

const connection = new Connection('https://api.mainnet-beta.solana.com', 'processed');

export default {
  async getStakeActivation(publicKey: PublicKey, epoch?: number): Promise<{
    state: 'inactive' | 'activating' | 'active' | 'deactivating',
    active: number,
    inactive: number
  }> {
    const args: any[] = [publicKey.toBase58()];
    if (epoch !== undefined) args.push({ epoch });

    const result = await (connection as any)._rpcRequest('getStakeActivation', args);
    if (result.error) throw new Error(result.error.message);
    return result.result;
  },

  async getVoteAccounts(commitment: Commitment = 'processed'): Promise<VoteAccountStatus> {
    return connection.getVoteAccounts(commitment);
  },

  async getStakeMinimumDelegation(
    config?: GetStakeMinimumDelegationConfig
  ): Promise<RpcResponseAndContext<number>> {
    return connection.getStakeMinimumDelegation(config);
  },
};
