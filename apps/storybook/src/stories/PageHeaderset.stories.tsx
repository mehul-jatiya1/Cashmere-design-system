import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PageHeaderset } from '@cashfree/cashmere'

// Flat args matching Figma's four controls exactly:
// type · buttonSet · subtext · statusTags
interface PageHeadersetArgs {
  type: 'homepage' | 'internalpage'
  subtext: boolean
  buttonSet: boolean
  statusTags: boolean
  // Values used when controls are on
  heading: string
  subheading: string
  primaryActionLabel: string
  secondaryActionLabel: string
  tagStatus: 'positive' | 'negative' | 'warning' | 'information' | 'intermediate'
  tagLabel: string
  breadcrumbCurrentPage: string
}

const meta: Meta<PageHeadersetArgs> = {
  title: 'Components/PageHeaderset',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['homepage', 'internalpage'],
      description: 'Layout type',
    },
    subtext: {
      control: 'boolean',
      description: 'Show subheading',
    },
    buttonSet: {
      control: 'boolean',
      description: 'Show primary and secondary action buttons',
    },
    statusTags: {
      control: 'boolean',
      description: 'Show status tag (internalpage only)',
    },
    heading: {
      control: 'text',
      description: 'Primary heading text',
    },
    subheading: {
      control: 'text',
      description: 'Subheading text (requires subtext: true)',
    },
    primaryActionLabel: {
      control: 'text',
      description: 'Primary button label (requires buttonSet: true)',
    },
    secondaryActionLabel: {
      control: 'text',
      description: 'Secondary button label (requires buttonSet: true)',
    },
    tagStatus: {
      control: 'select',
      options: ['positive', 'negative', 'warning', 'information', 'intermediate'],
      description: 'Tag status (requires statusTags: true, internalpage only)',
    },
    tagLabel: {
      control: 'text',
      description: 'Tag label (requires statusTags: true, internalpage only)',
    },
    breadcrumbCurrentPage: {
      control: 'text',
      description: 'Current page in breadcrumb trail (internalpage only)',
    },
  },
}

export default meta
type Story = StoryObj<PageHeadersetArgs>

function renderPageHeaderset(args: PageHeadersetArgs) {
  return (
    <div style={{ background: '#f4f6f9', padding: 32 }}>
      <PageHeaderset
        type={args.type}
        heading={args.heading}
        subheading={args.subtext ? args.subheading : undefined}
        primaryAction={args.buttonSet ? { label: args.primaryActionLabel } : undefined}
        secondaryAction={args.buttonSet ? { label: args.secondaryActionLabel } : undefined}
        tag={args.statusTags ? { status: args.tagStatus, label: args.tagLabel } : undefined}
        breadcrumbs={
          args.type === 'internalpage'
            ? { items: [{ label: 'All Payments', href: '#' }], currentPage: args.breadcrumbCurrentPage }
            : undefined
        }
      />
    </div>
  )
}

const defaultArgs: PageHeadersetArgs = {
  type: 'homepage',
  heading: 'Placeholder',
  subheading: 'Placeholder subtext',
  subtext: true,
  buttonSet: true,
  primaryActionLabel: 'Initiate Refund',
  secondaryActionLabel: 'Save as PNG',
  statusTags: false,
  tagStatus: 'positive',
  tagLabel: 'Success',
  breadcrumbCurrentPage: 'Transaction ID- 123984',
}

export const Playground: Story = {
  args: defaultArgs,
  render: renderPageHeaderset,
}

export const Homepage: Story = {
  args: defaultArgs,
  render: renderPageHeaderset,
}

export const HomepageNoButtons: Story = {
  args: { ...defaultArgs, buttonSet: false },
  render: renderPageHeaderset,
}

export const HomepageNoSubheading: Story = {
  args: { ...defaultArgs, subtext: false },
  render: renderPageHeaderset,
}

export const InternalPage: Story = {
  args: {
    ...defaultArgs,
    type: 'internalpage',
    statusTags: true,
    tagStatus: 'positive',
    tagLabel: 'Success',
  },
  render: renderPageHeaderset,
}

export const InternalPageNoButtons: Story = {
  args: {
    ...defaultArgs,
    type: 'internalpage',
    buttonSet: false,
    statusTags: true,
    tagStatus: 'positive',
    tagLabel: 'Success',
  },
  render: renderPageHeaderset,
}

export const InternalPageNegativeStatus: Story = {
  args: {
    ...defaultArgs,
    type: 'internalpage',
    primaryActionLabel: 'Retry Payment',
    secondaryActionLabel: 'Export',
    statusTags: true,
    tagStatus: 'negative',
    tagLabel: 'Failed',
  },
  render: renderPageHeaderset,
}
