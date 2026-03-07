import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // Must be ordered most-specific first
      {
        find: '@cashfree/cashmere-tokens/css',
        replacement: resolve(__dirname, '../../packages/tokens/src/css/index.css'),
      },
      {
        find: '@cashfree/cashmere/styles',
        replacement: resolve(__dirname, '../../packages/cashmere/dist/index.css'),
      },
      {
        find: '@cashfree/cashmere',
        replacement: resolve(__dirname, '../../packages/cashmere/src/index.ts'),
      },
      {
        find: '@cashfree/cashmere-tokens',
        replacement: resolve(__dirname, '../../packages/tokens/src/index.ts'),
      },
    ],
  },
})
