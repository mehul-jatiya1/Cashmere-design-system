import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '@cashfree/cashmere'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    items: [{ label: 'All Payments', href: '#' }],
    currentPage: 'Transaction ID- 123984',
  },
}

export const MultiLevel: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Payments', href: '#' },
      { label: 'All Transactions', href: '#' },
    ],
    currentPage: 'Transaction ID- 123984',
  },
}

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
}

export const SingleCrumb: Story = {
  args: {
    currentPage: 'Dashboard',
  },
}
