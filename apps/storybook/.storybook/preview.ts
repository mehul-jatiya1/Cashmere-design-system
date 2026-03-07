import type { Preview } from '@storybook/react'
import '@cashfree/cashmere-tokens/css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f4f6f9' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#1b1b1b' },
      ],
    },
  },
}

export default preview
