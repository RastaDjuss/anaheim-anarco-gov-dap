import * as anchor from '@coral-xyz/anchor';
import { config } from 'dotenv';
import { Keypair, SystemProgram } from '@solana/web3.js';
import { describe, it, beforeAll, expect } from 'vitest';
import type { Anaheim } from '../target/types/anaheim';

config(); // Load environment variables

// Helper to enforce timeouts
async function withTimeout<T>(
  promise: Promise<T>,
  timeout = 10000
): Promise<T> {
  const timeoutPromise = new Promise<T>((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeout)
  );
  return Promise.race([promise, timeoutPromise]);
}

describe('Anaheim Initialization', () => {
  let provider: anchor.AnchorProvider;
  let program: anchor.Program<Anaheim>;
  let anaheimKeypair: Keypair;
  let connection: anchor.web3.Connection;

  beforeAll(async () => {
    provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    connection = provider.connection;

    // @ts-expect-error: Ignore TS error due to missing IDL mapping
    program = anchor.workspace.Anaheim as anchor.Program<Anaheim>;
    anaheimKeypair = Keypair.generate();

    // Ensure the test keypair has SOL
    const info = await connection.getAccountInfo(anaheimKeypair.publicKey);
    if (!info) {
      const sig = await connection.requestAirdrop(
        anaheimKeypair.publicKey,
        anchor.web3.LAMPORTS_PER_SOL
      );

      // Use latest non-deprecated method
      const latestBlockhash = await connection.getLatestBlockhash();
      await withTimeout(
        connection.confirmTransaction(
          {
            signature: sig,
            ...latestBlockhash,
          },
          'confirmed'
        )
      );
    }
  });

  it('initializes Anaheim with count = 0', async () => {
    const txSig = await program.methods
      .initialize()
      .accounts({
        anaheim: anaheimKeypair.publicKey,
        payer: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      } as any) // Suppress TS2353 by casting (we assume the IDL is correct)
      .signers([anaheimKeypair])
      .rpc();

    // Use latest non-deprecated method
    const latestBlockhash = await connection.getLatestBlockhash();
    await withTimeout(
      connection.confirmTransaction(
        {
          signature: txSig,
          ...latestBlockhash,
        },
        'confirmed'
      )
    );

    // Access account with the actual account name defined in Rust
    const account = await program.account["anaheim"].fetch(anaheimKeypair.publicKey);
    expect(account.count.toNumber()).toBe(0);
  });
});
