import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Tags } from '@cashfree/cashmere'

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  parameters: {
    docs: {
      description: {
        component:
          'Tags display semantic status labels on content. Use them to communicate positive, negative, warning, or informational states at a glance — such as transaction statuses, KYC states, or payment outcomes.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/OEwHAfVtHhfYFGKEalynMP/Cashmere-Design-System?node-id=7279-11245&t=8ohgna1Sfb7mqqZH-11',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Controls the tag height and font size. Use small in dense tables, large in cards or summaries.',
      table: { defaultValue: { summary: 'small' } },
    },
    type: {
      control: 'radio',
      options: ['default', 'icon', 'background', 'text', 'corners'],
      description: 'Visual style — default shows icon + background, icon is icon-only, background is background-only, text is text-only, corners attaches to a card corner.',
      table: { defaultValue: { summary: 'default' } },
    },
    status: {
      control: 'radio',
      options: ['positive', 'negative', 'warning', 'information', 'intermediate'],
      description: 'Semantic state communicated by the tag\'s colour and icon.',
      table: { defaultValue: { summary: 'positive' } },
    },
    children: {
      control: 'text',
      description: 'The label text displayed inside the tag.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tags>

/* ── Default ────────────────────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    size: 'large',
    type: 'default',
    status: 'positive',
    children: 'Positive',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default Tag. Use the Controls panel to explore every status, type, and size combination.',
      },
    },
  },
}

/* ── All Statuses ───────────────────────────────────────────────────────── */

export const AllStatuses: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All five semantic statuses shown at both sizes. Colour and icon together ensure status is not communicated by colour alone.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['positive', 'negative', 'warning', 'information', 'intermediate'] as const).map(
        (status) => (
          <div key={status} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Tags size="large" type="default" status={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Tags>
            <Tags size="small" type="default" status={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Tags>
          </div>
        ),
      )}
    </div>
  ),
}

/* ── All Types ──────────────────────────────────────────────────────────── */

export const AllTypes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All five type variants across statuses. Choose the type based on the visual context — default for standalone tags, corners for table cells.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['default', 'icon', 'background', 'text', 'corners'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ width: 80, fontSize: 12, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-family-base)' }}>{type}</span>
          {(['positive', 'negative', 'warning', 'information', 'intermediate'] as const).map(status => (
            <Tags key={status} size="large" type={type} status={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Tags>
          ))}
        </div>
      ))}
    </div>
  ),
}

/* ── Corners variant in context ─────────────────────────────────────────── */

export const CornersInContext: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The "corners" type is designed to sit flush in the corner of a card or table row — zero border-radius on the relevant corner.',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        overflow: 'hidden',
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {(['positive', 'negative', 'warning'] as const).map(status => (
        <div key={status} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
          <span style={{ fontSize: 14, color: 'var(--color-text-primary)', flex: 1 }}>Order #{Math.floor(Math.random() * 90000 + 10000)}</span>
          <Tags size="small" type="corners" status={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Tags>
        </div>
      ))}
    </div>
  ),
}

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  args: {
    size: 'large',
    type: 'default',
    status: 'positive',
    children: 'Active',
  },
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — verifies the tag renders with the correct text and is visible.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tag = canvas.getByText('Active')
    await expect(tag).toBeVisible()
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: {
    size: 'small',
    type: 'default',
    status: 'positive',
    children: 'Paid',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'How Tags render on mobile (375px). Tags are typically part of larger list items — ensure surrounding padding keeps the tap target ≥44px.',
      },
    },
  },
}
