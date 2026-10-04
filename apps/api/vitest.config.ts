import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Resolves tsconfig "paths" natively (added by `nest g library`).
  resolve: { tsconfigPaths: true },
  test: {
    globals: true,
    root: './',
    include: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
  },
});
