import React, { useState } from 'react'
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

/* ── Logo ─────────────────────────────────────────────────────────────── */
const CashfreeLogo = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#094eff" />
    <text x="44" y="15" fontFamily="DM Sans, sans-serif" fontSize="13" fontWeight="700" fill="#fffffc">Cashfree</text>
    <text x="44" y="30" fontFamily="DM Sans, sans-serif" fontSize="11" fontWeight="400" fill="#fffffc" opacity="0.7">Payments</text>
  </svg>
)

const ChevronTrailing = () => <IconChevronDown size={20} />

const productVerticals: ProductVertical[] = [
  { id: 'collect', label: 'Collect' },
  { id: 'secure', label: 'Secure' },
  { id: 'payouts', label: 'Payouts' },
]

export const App = () => {
  const [activeItemId, setActiveItemId] = useState('home')
  const [activeProductId, setActiveProductId] = useState('collect')
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [testMode, setTestMode] = useState(false)

  const sections: NavSection[] = [
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

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f4f6f9', overflow: 'hidden' }}>
      <NavigationDrawer
        logo={<CashfreeLogo />}
        sections={sections}
        activeItemId={activeItemId}
        productVerticals={productVerticals}
        activeProductId={activeProductId}
        productDropdownOpen={productDropdownOpen}
        onItemClick={(item) => { setActiveItemId(item.id); setProductDropdownOpen(false) }}
        onProductSelect={(p) => { setActiveProductId(p.id); setProductDropdownOpen(false) }}
        onProductDropdownToggle={() => setProductDropdownOpen(o => !o)}
      />
      <main style={{ flex: 1, padding: 32, fontFamily: 'DM Sans, sans-serif' }}>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#1b1b1b' }}>NavigationDrawer</h1>
        <p style={{ color: '#5f5f5f', marginTop: 8 }}>
          Active: <strong>{activeItemId}</strong> · Product: <strong>{activeProductId}</strong> · Test mode: <strong>{testMode ? 'on' : 'off'}</strong>
        </p>
      </main>
    </div>
  )
}
