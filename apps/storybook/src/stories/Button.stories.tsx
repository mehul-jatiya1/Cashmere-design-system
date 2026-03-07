import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, IconHome, IconSettings, IconChevronDown } from '@cashfree/cashmere'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
    },
    negative: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

/* ── Playground ─────────────────────────────────────────────────────────── */

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    negative: false,
    disabled: false,
  },
}

/* ── Variants ───────────────────────────────────────────────────────────── */

export const Primary: Story = {
  args: { children: 'Button', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Button', variant: 'secondary' },
}

export const Tertiary: Story = {
  args: { children: 'Button', variant: 'tertiary' },
}

/* ── Sizes ──────────────────────────────────────────────────────────────── */

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </div>
  ),
}

/* ── Negative Intent ────────────────────────────────────────────────────── */

export const NegativeIntent: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" negative>Delete</Button>
      <Button variant="secondary" negative>Delete</Button>
      <Button variant="tertiary" negative>Delete</Button>
    </div>
  ),
}

/* ── With Icons ─────────────────────────────────────────────────────────── */

export const WithLeadingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large" leadingIcon={<IconHome size={16} />}>Button</Button>
      <Button size="medium" leadingIcon={<IconHome size={16} />}>Button</Button>
      <Button size="small" leadingIcon={<IconHome size={14} />}>Button</Button>
    </div>
  ),
}

export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="large" trailingIcon={<IconChevronDown size={16} />}>Button</Button>
      <Button size="medium" trailingIcon={<IconChevronDown size={16} />}>Button</Button>
      <Button size="small" trailingIcon={<IconChevronDown size={14} />}>Button</Button>
    </div>
  ),
}

export const IconOnly: Story = {
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
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button variant="primary" disabled>Button</Button>
      <Button variant="secondary" disabled>Button</Button>
      <Button variant="tertiary" disabled>Button</Button>
    </div>
  ),
}

/* ── All Variants Grid ──────────────────────────────────────────────────── */

export const AllVariants: Story = {
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
                <Button variant={variant} size={size} negative>Button</Button>
              </React.Fragment>
            ))}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {variants.map(variant => (
            <Button key={variant} variant={variant} size="medium" disabled>Button</Button>
          ))}
        </div>
      </div>
    )
  },
}
