import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageHeaderset } from '@cashfree/cashmere'

const meta: Meta<typeof PageHeaderset> = {
  title: 'Components/PageHeaderset',
  component: PageHeaderset,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof PageHeaderset>

export const Homepage: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset
        type="homepage"
        heading="Placeholder"
        subheading="Placeholder subtext"
        primaryAction={{ label: 'Initiate Refund' }}
        secondaryAction={{ label: 'Save as PNG' }}
      />
    </div>
  ),
}

export const HomepageNoButtons: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset type="homepage" heading="Placeholder" subheading="Placeholder subtext" />
    </div>
  ),
}

export const HomepageNoSubheading: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset
        type="homepage"
        heading="Placeholder"
        primaryAction={{ label: 'Initiate Refund' }}
        secondaryAction={{ label: 'Save as PNG' }}
      />
    </div>
  ),
}

export const InternalPage: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset
        type="internalpage"
        heading="Placeholder"
        subheading="Placeholder subtext"
        breadcrumbs={{
          items: [{ label: 'All Payments', href: '#' }],
          currentPage: 'Transaction ID- 123984',
        }}
        tag={{ status: 'positive', label: 'Success' }}
        primaryAction={{ label: 'Initiate Refund' }}
        secondaryAction={{ label: 'Save as PNG' }}
      />
    </div>
  ),
}

export const InternalPageNoButtons: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset
        type="internalpage"
        heading="Placeholder"
        subheading="Placeholder subtext"
        breadcrumbs={{
          items: [{ label: 'All Payments', href: '#' }],
          currentPage: 'Transaction ID- 123984',
        }}
        tag={{ status: 'positive', label: 'Success' }}
      />
    </div>
  ),
}

export const InternalPageNegativeStatus: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset
        type="internalpage"
        heading="Placeholder"
        subheading="Placeholder subtext"
        breadcrumbs={{
          items: [
            { label: 'All Payments', href: '#' },
            { label: 'Refunds', href: '#' },
          ],
          currentPage: 'Transaction ID- 123984',
        }}
        tag={{ status: 'negative', label: 'Failed' }}
        primaryAction={{ label: 'Retry Payment' }}
        secondaryAction={{ label: 'Export' }}
      />
    </div>
  ),
}
