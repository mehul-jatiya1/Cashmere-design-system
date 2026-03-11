import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'
import type { InlineConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)', '../src/**/*.docs.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config: InlineConfig) {
    config.resolve = config.resolve ?? {}
    config.resolve.alias = [
      ...(Array.isArray(config.resolve.alias) ? config.resolve.alias : []),
      { find: '@cashfree/cashmere-tokens/css', replacement: resolve(__dirname, '../../../packages/tokens/src/css/index.css') },
      { find: '@cashfree/cashmere', replacement: resolve(__dirname, '../../../packages/cashmere/src/index.ts') },
      { find: '@cashfree/cashmere-tokens', replacement: resolve(__dirname, '../../../packages/tokens/src/index.ts') },
    ]
    return config
  },
}

export default config
