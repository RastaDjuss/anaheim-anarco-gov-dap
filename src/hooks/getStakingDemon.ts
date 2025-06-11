import useSolanaClient from './solana/useSolanaClient.ts'; // adapte le chemin selon ta structure
import { PublicKey } from '@solana/web3.js';
import publicKey from '@/hooks/useSolanaClient.js'


  try {
    let solanaClient: undefined;
    const [activation, minDelegation, votes] = await Promise.all ( [solanaClient.getStakeActivation ( publicKey ),
      solanaClient.getStakeMinimumDelegation (), solanaClient.getVoteAccounts ()] );

    console.log('Stake Activation:', activation);
    console.log('Min Delegation:', minDelegation);
    console.log('Vote Accounts:', votes);

    return { activation, minDelegation, votes };
  } catch (error) {
    console.error('Error fetching staking info:', error);
    throw error;
  }
}
