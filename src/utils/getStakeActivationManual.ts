import { Connection, PublicKey } from '@solana/web3.js'

export async function getStakeActivationManual(connection: Connection, pubkey: PublicKey) {
  const accountInfo = await connection.getParsedAccountInfo(pubkey)
  const parsed = accountInfo.value?.data

  if (!parsed || typeof parsed !== 'object' || !('parsed' in parsed)) {
    throw new Error('Invalid or empty stake account')
  }

  const stake = (parsed as any).parsed.info.stake
  const state = (parsed as any).parsed.info.state

  return {
    state,
    active: stake.delegation.stake,
    inactive: 0, // 🔸 estimation manuelle sans epoch info
  }
}

// Utilise-le dans une fonction avec fallback
export async function fetchStakeActivationSafe(
  connection: Connection,
  pubkey: PublicKey
) {
  try {
  //  // @ts-expect-error méthode encore utilisée malgré deprecation
  //  return await connection.getStakeActivation(pubkey, { commitment: 'confirmed' })
  } catch (e) {
    console.warn('Deprecated method failed, using manual fallback.')
    return await getStakeActivationManual(connection, pubkey)
  }
}
