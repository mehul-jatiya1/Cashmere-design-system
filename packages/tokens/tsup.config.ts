import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  onSuccess: async () => {
    mkdirSync('dist', { recursive: true })
    copyFileSync('src/css/index.css', 'dist/index.css')
    copyFileSync('src/css/primitives.css', 'dist/primitives.css')
    copyFileSync('src/css/semantics.css', 'dist/semantics.css')
    copyFileSync('src/css/text-styles.css', 'dist/text-styles.css')
    console.log('CSS files copied to dist/')
  },
})
