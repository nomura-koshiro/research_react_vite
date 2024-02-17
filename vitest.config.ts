import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./src/test/setupTests.ts'],
    environment: 'jsdom',
    exclude: ['./node_modules/**', './src/test/e2e/**'],
    alias: { '@/': './src/' },
  },
})
