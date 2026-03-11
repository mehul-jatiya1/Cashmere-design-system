import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Breadcrumbs } from '@cashfree/cashmere'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          'Breadcrumbs show a user\'s location within the page hierarchy. They provide a quick way to navigate back to parent pages without using the browser back button.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/placeholder/Cashmere?node-id=breadcrumbs',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    items: {
      control: false,
      description: 'Array of parent page links. Each item has a `label` string and `href` string.',
    },
    currentPage: {
      control: 'text',
      description: 'The current page name (not a link). Displayed as the last crumb.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

/* ── Default ────────────────────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    items: [{ label: 'All Payments', href: '#' }],
    currentPage: 'Transaction ID- 123984',
  },
  parameters: {
    docs: {
      description: {
        story: 'Single parent + current page. The most common pattern for second-level pages.',
      },
    },
  },
}

/* ── Multi-level ────────────────────────────────────────────────────────── */

export const MultiLevel: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Payments', href: '#' },
      { label: 'All Transactions', href: '#' },
    ],
    currentPage: 'Transaction ID- 123984',
  },
  parameters: {
    docs: {
      description: {
        story: 'Three levels of parent hierarchy. Use for deep navigation paths like Payments → Refunds → Batch.',
      },
    },
  },
}

/* ── Max Depth ──────────────────────────────────────────────────────────── */

export const MaxDepth: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Payments', href: '#' },
      { label: 'Refunds', href: '#' },
      { label: 'Batch', href: '#' },
      { label: 'April 2024', href: '#' },
      { label: 'All Items', href: '#' },
    ],
    currentPage: 'Refund #RFD-9284',
  },
  parameters: {
    docs: {
      description: {
        story: 'Deep hierarchy with 6 levels. Consider truncating to show only the first 2 and last 2 crumbs when paths exceed 4 levels.',
      },
    },
  },
}

/* ── Single Crumb (no parents) ──────────────────────────────────────────── */

export const SingleCrumb: Story = {
  args: {
    currentPage: 'Dashboard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Only a current page with no parent links. Used for top-level pages where there is nowhere to go back to.',
      },
    },
  },
}

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  args: {
    items: [{ label: 'All Payments', href: '#' }],
    currentPage: 'Transaction ID- 123984',
  },
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — verifies the current page label and the parent link are both visible.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const currentPage = canvas.getByText('Transaction ID- 123984')
    await expect(currentPage).toBeVisible()
    const parentLink = canvas.getByText('All Payments')
    await expect(parentLink).toBeVisible()
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: {
    items: [{ label: 'All Payments', href: '#' }],
    currentPage: 'Transaction ID- 123984',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'How Breadcrumbs render on mobile (375px). Long crumb trails may require truncation on small screens.',
      },
    },
  },
}
