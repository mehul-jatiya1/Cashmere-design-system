import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TopNavigation } from '@cashfree/cashmere'

const meta: Meta<typeof TopNavigation> = {
  title: 'Components/TopNavigation',
  component: TopNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TopNavigation>

export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState('')
    return (
      <div style={{ background: '#f4f6f9', minHeight: '100vh' }}>
        <TopNavigation
          variant="default"
          searchPlaceholder="Search"
          searchValue={search}
          onSearchChange={setSearch}
          showNotification
          hasUnreadNotifications
          showHelp
        />
      </div>
    )
  },
}

export const NoUnreadNotifications: Story = {
  render: () => {
    const [search, setSearch] = useState('')
    return (
      <div style={{ background: '#f4f6f9', minHeight: '100vh' }}>
        <TopNavigation
          variant="default"
          searchPlaceholder="Search"
          searchValue={search}
          onSearchChange={setSearch}
          showNotification
          hasUnreadNotifications={false}
          showHelp
        />
      </div>
    )
  },
}

export const FormHeader: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', minHeight: '100vh' }}>
      <TopNavigation
        variant="form"
        heading="Page Heading"
        subheading="Subheading or description goes here"
        showHelp
      />
    </div>
  ),
}

export const FormHeaderNoSubheading: Story = {
  render: () => (
    <div style={{ background: '#f4f6f9', minHeight: '100vh' }}>
      <TopNavigation
        variant="form"
        heading="Page Heading"
        showHelp
      />
    </div>
  ),
}
