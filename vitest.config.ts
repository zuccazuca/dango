import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    include: [
      '**/*.spec.ts',
      '**/*.spec.cts',
      '**/*.spec.mts',
      '**/*.spec.tsx'
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**'
    ],
    globals: true,
    watch: false,
    root: 'src'
  }
});
