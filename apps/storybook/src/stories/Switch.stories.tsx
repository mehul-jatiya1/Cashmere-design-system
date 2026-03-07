import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@cashfree/cashmere'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Off: Story = {
  args: { checked: false },
}

export const On: Story = {
  args: { checked: true },
}

export const Controlled: Story = {
  render: () => {
    const [on, setOn] = useState(false)
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'DM Sans, sans-serif' }}>
        <Switch checked={on} onChange={setOn} />
        <span style={{ fontSize: 14 }}>{on ? 'On' : 'Off'}</span>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: { checked: false, disabled: true },
}

export const DisabledOn: Story = {
  args: { checked: true, disabled: true },
}
