import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from '@storybook/test'
import { Switch } from '@cashfree/cashmere'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Switch is a binary toggle for enabling or disabling a setting. It provides immediate feedback — no save button needed. Use it for on/off settings, never for multi-step actions.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/placeholder/Cashmere?node-id=switch',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The current on/off state of the switch.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction. Only disable when the feature is genuinely unavailable — show a tooltip explaining why.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Optional text label rendered next to the switch. Always describe the setting being toggled.',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when the switch state changes. Receives the new boolean value.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

/* ── Default ────────────────────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    checked: false,
    label: 'Enable notifications',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default Switch in off state with a label. Adjust props in the Controls panel.',
      },
    },
  },
}

/* ── States ─────────────────────────────────────────────────────────────── */

export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All four Switch states: off, on, disabled-off, disabled-on.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--font-family-base)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Switch checked={false} onChange={() => {}} label="Off" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Switch checked={true} onChange={() => {}} label="On" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Switch checked={false} onChange={() => {}} disabled label="Disabled off" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Switch checked={true} onChange={() => {}} disabled label="Disabled on" />
      </div>
    </div>
  ),
}

/* ── Controlled ─────────────────────────────────────────────────────────── */

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Fully controlled Switch — state lives in the parent component. Toggle it and watch the label update in real time.',
      },
    },
  },
  render: () => {
    const [on, setOn] = useState(false)
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-family-base)' }}>
        <Switch checked={on} onChange={setOn} label={on ? 'Notifications on' : 'Notifications off'} />
      </div>
    )
  },
}

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — clicks the switch and verifies aria-checked toggles to true.',
      },
    },
  },
  render: () => {
    const [on, setOn] = useState(false)
    return <Switch checked={on} onChange={setOn} label="Test switch" id="test-switch" />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const switchEl = canvas.getByRole('switch')
    await expect(switchEl).toHaveAttribute('aria-checked', 'false')
    await userEvent.click(switchEl)
    await expect(switchEl).toHaveAttribute('aria-checked', 'true')
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: {
    checked: false,
    label: 'Enable notifications',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'How the Switch renders on mobile (375px). The track is 44px tall by default to meet touch target guidelines.',
      },
    },
  },
}
