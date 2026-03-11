import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from '@storybook/test'
import { Button, IconHome, IconSettings, IconChevronDown } from '@cashfree/cashmere'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Buttons trigger actions — use them for primary calls to action, secondary actions, and destructive operations. Choose the variant that matches the action\'s importance in the UI hierarchy.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/placeholder/Cashmere?node-id=button',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual weight of the button — use primary for the most important action on a page, secondary for supporting actions, tertiary for low-emphasis actions.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Controls the button\'s height and padding. Default is medium.',
      table: { defaultValue: { summary: 'medium' } },
    },
    negative: {
      control: 'boolean',
      description: 'Switches the button to a destructive colour palette. Use for delete, remove, or irreversible actions.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and dims the button. Only disable when the action is truly unavailable.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Button label text. Keep it short, action-oriented, and sentence case.',
    },
    leadingIcon: {
      control: false,
      description: 'Icon rendered before the label. Pass any Cashmere icon component.',
    },
    trailingIcon: {
      control: false,
      description: 'Icon rendered after the label. Commonly used for dropdowns (ChevronDown).',
    },
    iconOnly: {
      control: false,
      description: 'Renders a square icon-only button. Always pair with an aria-label for accessibility.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

/* ── Default / Playground ───────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    negative: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default Button. Adjust props in the Controls panel to explore every combination.',
      },
    },
  },
}

/* ── Variants ───────────────────────────────────────────────────────────── */

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All three variants side by side — primary for the main CTA, secondary for supporting actions, tertiary for low-emphasis links.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </div>
  ),
}

/* ── Sizes ──────────────────────────────────────────────────────────────── */

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Large (48px), Medium (40px), and Small (32px). Match the size to the surrounding content density.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </div>
  ),
}

/* ── Negative / Destructive ─────────────────────────────────────────────── */

export const NegativeIntent: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The negative prop switches all variants to the destructive colour palette. Always confirm before executing a destructive action.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" negative>Delete</Button>
      <Button variant="secondary" negative>Delete</Button>
      <Button variant="tertiary" negative>Delete</Button>
    </div>
  ),
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

export const WithLeadingIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A leading icon reinforces the label. Use an icon that directly represents the action.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large" leadingIcon={<IconHome size={16} />}>Home</Button>
      <Button size="medium" leadingIcon={<IconHome size={16} />}>Home</Button>
      <Button size="small" leadingIcon={<IconHome size={14} />}>Home</Button>
    </div>
  ),
}

export const WithTrailingIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A trailing icon suggests an outcome — ChevronDown for dropdowns, ExternalLink for new-tab navigation.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large" trailingIcon={<IconChevronDown size={16} />}>Options</Button>
      <Button size="medium" trailingIcon={<IconChevronDown size={16} />}>Options</Button>
      <Button size="small" trailingIcon={<IconChevronDown size={14} />}>Options</Button>
    </div>
  ),
}

export const IconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons must always have an aria-label for screen readers. Use a tooltip in the actual product UI.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large" iconOnly={<IconSettings size={16} />} aria-label="Settings" />
      <Button size="medium" iconOnly={<IconSettings size={16} />} aria-label="Settings" />
      <Button size="small" iconOnly={<IconSettings size={14} />} aria-label="Settings" />
    </div>
  ),
}

/* ── Disabled ───────────────────────────────────────────────────────────── */

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled state for all variants. Prefer hiding unavailable actions over disabling them — if you must disable, show a tooltip explaining why.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" disabled>Button</Button>
      <Button variant="secondary" disabled>Button</Button>
      <Button variant="tertiary" disabled>Button</Button>
    </div>
  ),
}

/* ── Full Grid ──────────────────────────────────────────────────────────── */

export const AllVariants_Grid: Story = {
  name: 'All Variants (Grid)',
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix of all sizes × variants × states for a quick visual regression check.',
      },
    },
  },
  render: () => {
    const variants = ['primary', 'secondary', 'tertiary'] as const
    const sizes = ['large', 'medium', 'small'] as const

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {sizes.map(size => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {variants.map(variant => (
              <React.Fragment key={variant}>
                <Button variant={variant} size={size}>Button</Button>
                <Button variant={variant} size={size} negative>Delete</Button>
              </React.Fragment>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {variants.map(variant => (
            <Button key={variant} variant={variant} size="medium" disabled>Disabled</Button>
          ))}
        </div>
      </div>
    )
  },
}

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — verifies the button is visible, focusable, and responds to a click.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const btn = canvas.getByRole('button', { name: /click me/i })
    await expect(btn).toBeVisible()
    await expect(btn).not.toBeDisabled()
    await userEvent.click(btn)
    await expect(btn).toHaveFocus()
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'How the button renders on mobile (375px). Minimum tap target is 44px — use large or medium sizes in mobile contexts.',
      },
    },
  },
}
