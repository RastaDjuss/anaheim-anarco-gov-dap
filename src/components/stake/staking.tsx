import {
  Connection,
  PublicKey,
  StakeActivationData,
  GetStakeActivationConfig,
} from '@solana/web3.js'

/**
 * Wrapper autour de la méthode dépréciée, utilisée proprement malgré le warning TS.
 */
export async function getStakeActivationSafe(
  connection: Connection,
  pubkey: PublicKey
): Promise<StakeActivationData> {
  const config: GetStakeActivationConfig = {
    commitment: 'confirmed',
  }

  // 👇 TypeScript la marque comme dépréciée, mais elle est encore correcte
  // On ignore le warning car aucune alternative réelle n'existe
  // eslint-disable-next-line deprecation/deprecation
  return await connection.getStakeActivation(pubkey)
}
