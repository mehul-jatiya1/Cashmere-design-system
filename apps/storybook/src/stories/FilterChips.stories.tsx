import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from '@storybook/test'
import { FilterChips } from '@cashfree/cashmere'

function IconLayers() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M2 5.5L8 2L14 5.5L8 9L2 5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.5L8 14L14 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8L8 11.5L14 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const meta: Meta<typeof FilterChips> = {
  title: 'Components/FilterChips',
  component: FilterChips,
  parameters: {
    docs: {
      description: {
        component:
          'FilterChips are interactive pill-shaped controls used to filter content — they support active/selected state, a badge count, and optional leading/trailing icons.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/OEwHAfVtHhfYFGKEalynMP/Cashmere-Design-System?node-id=11398-2593&t=8ohgna1Sfb7mqqZH-4',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The text label displayed inside the chip.',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the chip is in the selected/active state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled and non-interactive.',
      table: { defaultValue: { summary: 'false' } },
    },
    showBadge: {
      control: 'boolean',
      description: 'Whether to show the badge count pill.',
      table: { defaultValue: { summary: 'false' } },
    },
    badgeCount: {
      control: 'number',
      description: 'The number shown in the badge. Only visible when showBadge is true.',
    },
    leadingIcon: {
      control: false,
      description: 'Icon element rendered before the label.',
    },
    trailingIcon: {
      control: false,
      description: 'Icon element rendered after the badge. Defaults to a chevron down.',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler fired when the chip is pressed.',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterChips>

/* ── Default ────────────────────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    label: 'Label',
    leadingIcon: <IconLayers />,
    showBadge: true,
    badgeCount: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default FilterChip state — unselected, with an icon and badge count.',
      },
    },
  },
}

/* ── Active ─────────────────────────────────────────────────────────────── */

export const Active: Story = {
  args: {
    label: 'Label',
    leadingIcon: <IconLayers />,
    showBadge: true,
    badgeCount: 3,
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Active/selected state — use when the filter is applied. Border and background turn primary.',
      },
    },
  },
}

/* ── Disabled ───────────────────────────────────────────────────────────── */

export const Disabled: Story = {
  args: {
    label: 'Label',
    leadingIcon: <IconLayers />,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state — the chip is non-interactive. Badge is hidden in this state.',
      },
    },
  },
}

/* ── All States ─────────────────────────────────────────────────────────── */

export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All states side by side — Default, Active, and Disabled.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <FilterChips label="Default" leadingIcon={<IconLayers />} showBadge badgeCount={3} />
      <FilterChips label="Active" leadingIcon={<IconLayers />} showBadge badgeCount={3} isActive />
      <FilterChips label="Disabled" leadingIcon={<IconLayers />} disabled />
    </div>
  ),
}

/* ── Without Badge ──────────────────────────────────────────────────────── */

export const WithoutBadge: Story = {
  args: {
    label: 'Category',
    leadingIcon: <IconLayers />,
    showBadge: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'FilterChip without a badge — use when no count is available or relevant.',
      },
    },
  },
}

/* ── Without Leading Icon ───────────────────────────────────────────────── */

export const TextOnly: Story = {
  args: {
    label: 'Status',
    showBadge: true,
    badgeCount: 7,
  },
  parameters: {
    docs: {
      description: {
        story: 'FilterChip with only a label and badge, no leading icon.',
      },
    },
  },
}

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  args: {
    label: 'Filter',
    leadingIcon: <IconLayers />,
    showBadge: true,
    badgeCount: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — verifies the chip is clickable and visible.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const chip = canvas.getByRole('button', { name: /filter/i })
    await expect(chip).toBeVisible()
    await expect(chip).not.toBeDisabled()
    await userEvent.click(chip)
    await expect(chip).toBeVisible()
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: {
    label: 'Label',
    leadingIcon: <IconLayers />,
    showBadge: true,
    badgeCount: 3,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'How FilterChips render on mobile (375px). Ensure surrounding tap targets are ≥44px.',
      },
    },
  },
}
