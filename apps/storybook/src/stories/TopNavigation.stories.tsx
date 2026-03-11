import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from '@storybook/test'
import { TopNavigation } from '@cashfree/cashmere'

const meta: Meta<typeof TopNavigation> = {
  title: 'Components/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'TopNavigation is the persistent top bar of the Cashfree merchant dashboard. It provides global search, notification alerts, and contextual help — always visible regardless of what page the merchant is on.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/placeholder/Cashmere?node-id=top-navigation',
    },
  },
}

export default meta
type Story = StoryObj<typeof TopNavigation>

/* ── Default ────────────────────────────────────────────────────────────── */

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default TopNavigation with search, notification bell (with unread badge), and help icon.',
      },
    },
  },
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

/* ── No Unread Notifications ────────────────────────────────────────────── */

export const NoUnreadNotifications: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Notification bell without the unread badge — all notifications have been read.',
      },
    },
  },
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

/* ── Interactive ────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Automated interaction test — types in the search field and verifies the value updates.',
      },
    },
  },
  render: () => {
    const [search, setSearch] = useState('')
    return (
      <div style={{ background: '#f4f6f9', minHeight: '100vh' }}>
        <TopNavigation
          variant="default"
          searchPlaceholder="Search transactions"
          searchValue={search}
          onSearchChange={setSearch}
          showNotification
          hasUnreadNotifications={false}
          showHelp
        />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const searchInput = canvas.getByPlaceholderText('Search transactions')
    await expect(searchInput).toBeVisible()
    await userEvent.click(searchInput)
    await userEvent.type(searchInput, 'pay_123')
    await expect(searchInput).toHaveValue('pay_123')
  },
}

/* ── Mobile ─────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
    docs: {
      description: {
        story: 'How TopNavigation renders on mobile (375px). Search may collapse to an icon — ensure the bar remains usable on small screens.',
      },
    },
  },
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
