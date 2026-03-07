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

// Figma MCP assets for the Cashfree Payments wordmark (valid 7 days).
// Replace with the official brand SVG files for production.
const CASHFREE_LOGO_VECTORS: { url: string; inset: string }[] = [
  { url: 'https://www.figma.com/api/mcp/asset/a38186e5-bf51-4db2-b6b0-53baa0a6502d', inset: '46.82% 71.59% 15.22% 19.92%' },
  { url: 'https://www.figma.com/api/mcp/asset/e98e9da4-1688-4d77-b787-fac8ad3244b1', inset: '55.3% 62.49% 14.59% 29.78%' },
  { url: 'https://www.figma.com/api/mcp/asset/d086a595-79a6-476e-aa50-a1c7b8b6915c', inset: '55.99% 52.39% 2.99% 38.77%' },
  { url: 'https://www.figma.com/api/mcp/asset/e643cd43-7f65-4cef-a033-3253aea08ef9', inset: '55.3% 37.62% 15.23% 49.22%' },
  { url: 'https://www.figma.com/api/mcp/asset/2068ccf7-5786-45cd-84db-4e1b34672397', inset: '55.3% 27.07% 14.7% 64.69%' },
  { url: 'https://www.figma.com/api/mcp/asset/ef4637f2-ec00-4bf5-85aa-8053f38a2634', inset: '55.3% 16.81% 15.23% 75.18%' },
  { url: 'https://www.figma.com/api/mcp/asset/e1b6a4cd-161c-41d7-8559-fee54750e0a1', inset: '48.56% 8.78% 14.8% 84.81%' },
  { url: 'https://www.figma.com/api/mcp/asset/e54a3d1a-fd12-465b-9642-d11f808e039f', inset: '55.52% 0.28% 14.8% 92.69%' },
  { url: 'https://www.figma.com/api/mcp/asset/41fcd444-c98f-4552-a02a-ab25bf59445f', inset: '2.02% 62.77% 58.75% 28.63%' },
  { url: 'https://www.figma.com/api/mcp/asset/aba8fc54-cb01-4da7-82b1-8b4eb50990ea', inset: '11.15% 53.06% 58.75% 39.21%' },
  { url: 'https://www.figma.com/api/mcp/asset/c39ef464-6acb-4c39-8645-80c418e86d2b', inset: '11.36% 43.91% 58.96% 49.06%' },
  { url: 'https://www.figma.com/api/mcp/asset/899d36d2-0772-42d6-b8fd-38200910d634', inset: '0.55% 33.85% 59.39% 58.14%' },
  { url: 'https://www.figma.com/api/mcp/asset/835a464e-726c-49ab-8e35-c080616bb76a', inset: '0.23% 25.75% 59.38% 67.92%' },
  { url: 'https://www.figma.com/api/mcp/asset/e3cfe617-f8f2-49ca-aba1-ece310f7aedd', inset: '11.41% 19.82% 59.38% 75.23%' },
  { url: 'https://www.figma.com/api/mcp/asset/ea990fd4-a42b-4e67-9e7a-3f61c76c4c8b', inset: '11.15% 10.26% 58.86% 81.49%' },
  { url: 'https://www.figma.com/api/mcp/asset/83c2945c-c805-4133-af22-2ac72805184b', inset: '11.15% 0.16% 58.86% 91.6%' },
  { url: 'https://www.figma.com/api/mcp/asset/34f5543e-ffb1-4b62-853c-7d58b2ef17c7', inset: '0.76% 74.78% 85.42% 5.62%' },
  { url: 'https://www.figma.com/api/mcp/asset/44405147-2d34-47a0-ab34-ebf7d4c47416', inset: '0.76% 90.22% 34.1% 5.62%' },
  { url: 'https://www.figma.com/api/mcp/asset/2b4ef4ca-20e9-4f5c-86f6-c4ea67c119ed', inset: '19.19% 79.89% 66.98% 11.1%' },
  { url: 'https://www.figma.com/api/mcp/asset/17455c29-07a6-45b5-b3e7-9302b4950c00', inset: '19.19% 95.84% 15.67% 0' },
]

const CashfreePaymentsLogo = () => (
  <div
    aria-label="Cashfree Payments"
    role="img"
    style={{ position: 'relative', width: '119.613px', height: '36px', overflow: 'hidden', flexShrink: 0 }}
  >
    {CASHFREE_LOGO_VECTORS.map(({ url, inset }, i) => (
      <div key={i} style={{ position: 'absolute', inset }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={url} />
      </div>
    ))}
  </div>
)

/** "pulse" application logo — Figma MCP asset (valid 7 days, replace with brand SVG for production) */
const PulseAppLogo = () => (
  <div style={{ position: 'relative', width: '31.405px', height: '11.475px' }}>
    <img
      alt="pulse"
      style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }}
      src="https://www.figma.com/api/mcp/asset/42721e3e-4541-40e6-9638-19c8ec91d56a"
    />
  </div>
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
