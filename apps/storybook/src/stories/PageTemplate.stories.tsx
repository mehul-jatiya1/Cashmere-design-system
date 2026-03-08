import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TopNavigation, NavigationDrawer, PageHeaderset, IconHome, IconBargraph, IconBookOpenText, IconMoney, IconDocument, IconWaiting, IconCode, IconSettings, Switch } from '@cashfree/cashmere'
import type { NavSection } from '@cashfree/cashmere'

const meta: Meta = {
  title: 'Page Template/Dashboard Shell',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

const DashboardShellLogo = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" aria-label="Cashfree Payments">
    <rect width="120" height="36" rx="4" fill="#ffffff10" />
    <text x="8" y="23" fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFC">Cashfree</text>
  </svg>
)

const DashboardShellAppLogo = () => (
  <svg width="36" height="20" viewBox="0 0 36 20" fill="none" aria-label="App">
    <text x="0" y="15" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="600" fill="#DCFFE9">pulse</text>
  </svg>
)

const TX_ITEMS = [
  { id: 'payments', label: 'Payments' },
  { id: 'orders',   label: 'Orders'   },
  { id: 'refunds',  label: 'Refunds'  },
  { id: 'disputes', label: 'Disputes' },
]

const SUB_ITEMS = [
  { id: 'menu-1', label: 'Menu 1' },
  { id: 'menu-2', label: 'Menu 2' },
  { id: 'menu-3', label: 'Menu 3' },
]

function buildNavSections(testMode: boolean, setTestMode: (v: boolean) => void): NavSection[] {
  return [
    {
      id: 'main',
      items: [
        { id: 'home',        label: 'Home',                  icon: <IconHome size={20} /> },
        { id: 'insights',    label: 'Insights',              icon: <IconBargraph size={20} /> },
        { id: 'tx-history',  label: 'Transactional History', icon: <IconBookOpenText size={20} />, trailing: 'chevron', subItems: TX_ITEMS },
        { id: 'settlements', label: 'Settlements',           icon: <IconMoney size={20} /> },
        { id: 'reports',     label: 'Reports',               icon: <IconDocument size={20} /> },
      ],
    },
    {
      id: 'products',
      title: 'Products',
      items: [
        { id: 'collection-methods', label: 'Collection Methods', trailing: 'chevron', subItems: SUB_ITEMS },
        { id: 'one-click-checkout', label: 'One Click Checkout', trailing: 'chevron', subItems: SUB_ITEMS },
        { id: 'recurring-payments', label: 'Recurring Payments', trailing: 'chevron', subItems: SUB_ITEMS },
      ],
    },
    {
      id: 'settings',
      items: [
        { id: 'test-mode',  label: 'Test Mode',  icon: <IconWaiting size={20} />, trailing: <Switch checked={testMode} onChange={setTestMode} /> },
        { id: 'developers', label: 'Developers', icon: <IconCode size={20} /> },
        { id: 'settings',   label: 'Settings',   icon: <IconSettings size={20} /> },
      ],
    },
  ]
}

export const Composed: Story = {
  name: 'Dashboard Shell',
  render: () => {
    const [search, setSearch] = useState('')
    const [activeItemId, setActiveItemId] = useState('home')
    const [activeProductId, setActiveProductId] = useState('collect')
    const [productDropdownOpen, setProductDropdownOpen] = useState(false)
    const [testMode, setTestMode] = useState(false)
    const sections = buildNavSections(testMode, setTestMode)

    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <NavigationDrawer
          logo={<DashboardShellLogo />}
          appLogo={<DashboardShellAppLogo />}
          sections={sections}
          activeItemId={activeItemId}
          productVerticals={[
            { id: 'collect', label: 'Collect' },
            { id: 'secure',  label: 'Secure'  },
            { id: 'payouts', label: 'Payouts' },
          ]}
          activeProductId={activeProductId}
          productDropdownOpen={productDropdownOpen}
          onItemClick={(item) => { setActiveItemId(item.id); setProductDropdownOpen(false) }}
          onProductSelect={(p) => { setActiveProductId(p.id); setProductDropdownOpen(false) }}
          onProductDropdownToggle={() => setProductDropdownOpen(o => !o)}
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#f4f6f9' }}>
          <TopNavigation
            variant="default"
            searchPlaceholder="Search"
            searchValue={search}
            onSearchChange={setSearch}
            showNotification
            hasUnreadNotifications
            showHelp
          />
          <main style={{ flex: 1, padding: 32, overflow: 'auto', fontFamily: 'DM Sans, sans-serif' }}>
            <PageHeaderset
              type="homepage"
              heading="Payments"
              subheading="View and manage all your payment transactions"
              primaryAction={{ label: 'Initiate Refund' }}
              secondaryAction={{ label: 'Export' }}
            />
          </main>
        </div>
      </div>
    )
  },
}
