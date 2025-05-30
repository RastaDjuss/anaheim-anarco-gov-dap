import { z } from 'zod';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts'], // <- ici
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
    },
    testTimeout: 30000, // Timeout global de 30 secondes pour chaque test
  },
});
// Schéma strict
const TestConfigSchema = z.object({
  deps: z.object({
    inline: z.union([z.boolean(), z.array(z.union([z.string(), z.instanceof(RegExp)]))]).optional(),
  }).default({ inline: true }),
  coverage: z.object({
    provider: z.literal('v8'),
    include: z.array(z.string()),
  }).default({
    provider: 'v8',
    include: ['src/**/*.ts'],
  }),
});

// Exemple d'utilisation
const testConfig = TestConfigSchema.parse({
  deps: { inline: [/.*\.js$/, 'module-name'] },
  coverage: { provider: 'v8', include: ['src/**/*.ts'] },
});
console.log(testConfig);
