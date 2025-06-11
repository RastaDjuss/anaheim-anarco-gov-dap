import { useEffect } from 'react';
import { PublicKey, StakeActivationData, VoteAccountStatus } from '@solana/web3.js';
import solanaClient from '../useSolanaClient.ts'; // Pas d'extension .ts ici si ton build le permet

export default function useStakingDemo(publicKey: PublicKey) {
  useEffect(() => {
    async function fetchStakeInfo() {
      let activation: unknown extends (object & {
          then(onfulfilled: infer F, ...args: infer _): any
        }) ? (F extends ((value: infer V, ...args: infer _) => any) ? Awaited<V> : never) : unknown,
        minDelegation: unknown extends (object & {
          then(onfulfilled: infer F, ...args: infer _): any
        }) ? (F extends ((value: infer V, ...args: infer _) => any) ? Awaited<V> : never) : unknown,
        votes: unknown extends (object & {
          then(onfulfilled: infer F, ...args: infer _): any
        }) ? (F extends ((value: infer V, ...args: infer _) => any) ? Awaited<V> : never) : unknown
      [activation, minDelegation, votes] = await Promise.all ( [solanaClient.getStakeActivation ( publicKey ), solanaClient.getStakeMinimumDelegation (), solanaClient.getVoteAccounts ()] )

      console.log('Stake Activation:', activation);
      console.log('Min Delegation:', minDelegation);
      console.log('Vote Accounts:', votes);
    }
    fetchStakeInfo();
  }, [publicKey]);
}
