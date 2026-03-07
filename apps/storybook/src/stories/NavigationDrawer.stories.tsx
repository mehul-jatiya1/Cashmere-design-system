import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationDrawer,
  Switch,
  IconHome,
  IconBargraph,
  IconBookOpenText,
  IconMoney,
  IconDocument,
  IconWaiting,
  IconCode,
  IconSettings,
  IconChevronDown,
} from '@cashfree/cashmere'
import type { NavSection, ProductVertical } from '@cashfree/cashmere'

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Components/NavigationDrawer',
  component: NavigationDrawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof NavigationDrawer>

const productVerticals: ProductVertical[] = [
  { id: 'collect', label: 'Collect' },
  { id: 'secure', label: 'Secure' },
  { id: 'payouts', label: 'Payouts' },
]

/**
 * Cashfree Payments wordmark — reconstructed from Figma design vectors.
 * The mark occupies the left ~30 px; wordmark text fills the remainder.
 * Replace with the official SVG asset when available.
 */
const CashfreePaymentsLogo = () => (
  <svg
    width="120"
    height="36"
    viewBox="0 0 119.613 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Cashfree Payments"
    role="img"
  >
    {/* Logo mark — far-left vertical bar (lime) */}
    <rect x="0" y="6.91" width="4.98" height="23.45" fill="#B4E600" />
    {/* Logo mark — top horizontal bar (green) */}
    <rect x="6.72" y="0.27" width="23.45" height="4.98" fill="#00B779" />
    {/* Logo mark — inner vertical bar (green) */}
    <rect x="6.72" y="0.27" width="4.98" height="23.45" fill="#00B779" />
    {/* Logo mark — middle horizontal bar (lime) */}
    <rect x="13.28" y="6.91" width="10.76" height="4.98" fill="#B4E600" />
    {/* Wordmark — "Cashfree" */}
    <text
      x="34"
      y="15"
      fontFamily="DM Sans, sans-serif"
      fontSize="12.5"
      fontWeight="700"
      fill="#FFFFFC"
      letterSpacing="-0.2"
    >
      Cashfree
    </text>
    {/* Wordmark — "Payments" */}
    <text
      x="24"
      y="32"
      fontFamily="DM Sans, sans-serif"
      fontSize="10.5"
      fontWeight="400"
      fill="#FFFFFC"
    >
      Payments
    </text>
  </svg>
)

/**
 * "pulse" application logo — using Figma MCP asset (valid 7 days).
 * Replace with the actual SVG asset for production.
 */
const PulseAppLogo = () => (
  <img
    src="https://www.figma.com/api/mcp/asset/a7e774c8-676e-48a8-a9c1-fb590091c8f5"
    alt="pulse"
    style={{ width: '31.405px', height: '11.475px', display: 'block' }}
  />
)

const ChevronTrailing = () => <IconChevronDown size={20} />

function buildSections(testMode: boolean, setTestMode: (v: boolean) => void): NavSection[] {
  return [
    {
      id: 'main',
      items: [
        { id: 'home',        label: 'Home',                  icon: <IconHome size={20} /> },
        { id: 'insights',    label: 'Insights',              icon: <IconBargraph size={20} /> },
        { id: 'tx-history',  label: 'Transactional History', icon: <IconBookOpenText size={20} />, trailing: <ChevronTrailing /> },
        { id: 'settlements', label: 'Settlements',           icon: <IconMoney size={20} /> },
        { id: 'reports',     label: 'Reports',               icon: <IconDocument size={20} /> },
      ],
    },
    {
      id: 'products',
      title: 'Products',
      items: [
        { id: 'collection-methods', label: 'Collection Methods', trailing: <ChevronTrailing /> },
        { id: 'one-click-checkout', label: 'One Click Checkout', trailing: <ChevronTrailing /> },
        { id: 'recurring-payments', label: 'Recurring Payments', trailing: <ChevronTrailing /> },
        { id: 'riskshield',         label: 'Riskshield',         trailing: <ChevronTrailing /> },
      ],
    },
    {
      id: 'more-products',
      title: 'More Products',
      collapsible: true,
      items: [
        { id: 'riskshield-more', label: 'Riskshield' },
        { id: 'spos',            label: 'SPOS' },
        { id: 'subscriptions',   label: 'Subscriptions' },
      ],
    },
    {
      id: 'settings',
      items: [
        {
          id: 'test-mode',
          label: 'Test Mode',
          icon: <IconWaiting size={20} />,
          trailing: <Switch checked={testMode} onChange={setTestMode} />,
        },
        { id: 'developers', label: 'Developers', icon: <IconCode size={20} /> },
        { id: 'settings',   label: 'Settings',   icon: <IconSettings size={20} /> },
      ],
    },
  ]
}

export const Default: Story = {
  render: () => {
    const [activeItemId, setActiveItemId] = useState('home')
    const [activeProductId, setActiveProductId] = useState('collect')
    const [productDropdownOpen, setProductDropdownOpen] = useState(false)
    const [testMode, setTestMode] = useState(false)
    const sections = buildSections(testMode, setTestMode)

    return (
      <div style={{ display: 'flex', height: '100vh', background: '#f4f6f9' }}>
        <NavigationDrawer
          logo={<CashfreePaymentsLogo />}
          appLogo={<PulseAppLogo />}
          sections={sections}
          activeItemId={activeItemId}
          productVerticals={productVerticals}
          activeProductId={activeProductId}
          productDropdownOpen={productDropdownOpen}
          onItemClick={(item) => { setActiveItemId(item.id); setProductDropdownOpen(false) }}
          onProductSelect={(p) => { setActiveProductId(p.id); setProductDropdownOpen(false) }}
          onProductDropdownToggle={() => setProductDropdownOpen(o => !o)}
        />
        <main style={{ flex: 1, padding: 32, fontFamily: 'DM Sans, sans-serif', overflow: 'auto' }}>
          <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#1b1b1b' }}>NavigationDrawer</h1>
          <p style={{ color: '#5f5f5f', marginTop: 8 }}>
            Active: <strong>{activeItemId}</strong> · Product: <strong>{activeProductId}</strong> · Test mode: <strong>{testMode ? 'on' : 'off'}</strong>
          </p>
        </main>
      </div>
    )
  },
}

export const WithDropdownOpen: Story = {
  render: () => {
    const [activeItemId, setActiveItemId] = useState('home')
    const [activeProductId, setActiveProductId] = useState('collect')
    const [productDropdownOpen, setProductDropdownOpen] = useState(true)
    const [testMode, setTestMode] = useState(false)
    const sections = buildSections(testMode, setTestMode)

    return (
      <div style={{ display: 'flex', height: '100vh', background: '#f4f6f9' }}>
        <NavigationDrawer
          logo={<CashfreePaymentsLogo />}
          appLogo={<PulseAppLogo />}
          sections={sections}
          activeItemId={activeItemId}
          productVerticals={productVerticals}
          activeProductId={activeProductId}
          productDropdownOpen={productDropdownOpen}
          onItemClick={(item) => { setActiveItemId(item.id); setProductDropdownOpen(false) }}
          onProductSelect={(p) => { setActiveProductId(p.id); setProductDropdownOpen(false) }}
          onProductDropdownToggle={() => setProductDropdownOpen(o => !o)}
        />
        <main style={{ flex: 1, padding: 32, fontFamily: 'DM Sans, sans-serif' }} />
      </div>
    )
  },
}
