import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { describe, it, expect } from "vitest";
import { Anaheim } from "../target/types/anaheim";

describe("create_user", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.Anaheim as Program<Anaheim>;

  it("Creates a user successfully with a valid username", async () => {
    const validUsername = "Alice";

    // Trouver PDA
    const [userAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from("user"), provider.wallet.publicKey.toBuffer()],
      program.programId
    );

    const accounts = {
      userAccount,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
      rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    };

    // **APPEL Anchor méthode RPC — selon IDL (adapter le nom de méthode)**
    await program.methods
      .createUser(validUsername)  // adapter selon ta méthode IDL
      .accounts(accounts)
      .rpc();

    // Récupérer les données de l'account
    const user = await program.account.userAccount.fetch(userAccount);
    expect(user.username).toBe(validUsername);
  });
});
