// lib/ClientSubscriptionId.ts

/**
 * Utility to generate a unique identifier for client subscriptions,
 * for caching, logging, or tracking live websocket updates.
 */

let counter = 0

/**
 * Generates a unique subscription ID with optional prefix.
 *
 * @param prefix A custom string to prepend (default: 'sub')
 * @returns A unique client subscription ID string
 */
export function generateClientSubscriptionId(prefix = 'sub'): string {
  return `${prefix}-${Date.now()}-${++counter}`
}

/**
 * Reset the internal counter (for testing or app reload).
 */
export function resetClientSubscriptionCounter(): void {
  counter = 0
}

export class ClientSubscriptionId {
}
