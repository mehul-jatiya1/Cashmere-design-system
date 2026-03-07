import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tags } from '@cashfree/cashmere'

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'large'] },
    type: { control: 'radio', options: ['default', 'icon', 'background', 'text', 'corners'] },
    status: {
      control: 'radio',
      options: ['positive', 'negative', 'warning', 'information', 'intermediate'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {
  args: {
    size: 'large',
    type: 'default',
    status: 'positive',
    children: 'Positive',
  },
}

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['positive', 'negative', 'warning', 'information', 'intermediate'] as const).map(
        (status) => (
          <div key={status} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
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

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['default', 'icon', 'background', 'text', 'corners'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ width: 80, fontSize: 12, color: '#767676' }}>{type}</span>
          <Tags size="large" type={type} status="positive">
            Positive
          </Tags>
          <Tags size="large" type={type} status="negative">
            Negative
          </Tags>
          <Tags size="large" type={type} status="warning">
            Warning
          </Tags>
          <Tags size="large" type={type} status="information">
            Information
          </Tags>
          <Tags size="large" type={type} status="intermediate">
            Intermediate
          </Tags>
        </div>
      ))}
    </div>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Tags size="small" type="default" status="positive">
        Positive
      </Tags>
      <Tags size="small" type="default" status="negative">
        Negative
      </Tags>
      <Tags size="small" type="default" status="warning">
        Warning
      </Tags>
      <Tags size="small" type="default" status="information">
        Information
      </Tags>
      <Tags size="small" type="default" status="intermediate">
        Intermediate
      </Tags>
    </div>
  ),
}

export const ForCorners: Story = {
  render: () => (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid #e8e8e8',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px' }}>
        <span style={{ fontSize: 14, color: '#1b1b1b' }}>Table row content</span>
        <Tags size="small" type="corners" status="positive">
          Positive
        </Tags>
      </div>
    </div>
  ),
}
