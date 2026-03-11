import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
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
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'PageHeaderset is the top content area of every page in the Cashfree dashboard. It combines the page title, optional subheading, action buttons (primary + secondary), status tags, and breadcrumbs into one consistent header block.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/placeholder/Cashmere?node-id=page-headerset',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Full playground — toggle all controls to explore every PageHeaderset combination.',
      },
    },
  },
}

export const Homepage: Story = {
  args: defaultArgs,
  render: renderPageHeaderset,
  parameters: {
    docs: {
      description: {
        story: 'Homepage variant — large heading, subheading, and action buttons. No breadcrumbs. Used for top-level sections like the dashboard home.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Internal page variant — includes breadcrumbs above the heading and a status tag. Used for detail pages like a single transaction.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Internal page with a negative/failed status — used for failed transactions or declined payments where a retry action is available.',
      },
    },
  },
}

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — verifies the heading and primary action button are visible.',
      },
    },
  },
  render: renderPageHeaderset,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const heading = canvas.getByText('Placeholder')
    await expect(heading).toBeVisible()
    const primaryBtn = canvas.getByRole('button', { name: /Initiate Refund/i })
    await expect(primaryBtn).toBeVisible()
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: defaultArgs,
  render: renderPageHeaderset,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'How PageHeaderset renders on mobile (375px). Buttons should stack vertically on small screens.',
      },
    },
  },
}
