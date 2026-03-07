import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  IconHome, IconBargraph, IconBookOpenText, IconMoney, IconDocument,
  IconWaiting, IconCode, IconSettings, IconSearch, IconBell, IconHelp, IconUser,
  IconChevronDown, IconChevronUp, IconChevronDown24, IconChevronUp24,
} from '@cashfree/cashmere'
import { Page, PageHeader, Section, Table, TR, TD, Token, Value, font, mono } from './_docs'

const meta: Meta = {
  title: 'Foundations/Icons',
  parameters: { layout: 'fullscreen' },
}
export default meta

const ALL_ICONS = [
  { name: 'IconHome',          Component: IconHome,          category: 'Navigation' },
  { name: 'IconBargraph',      Component: IconBargraph,      category: 'Data' },
  { name: 'IconBookOpenText',  Component: IconBookOpenText,  category: 'Content' },
  { name: 'IconMoney',         Component: IconMoney,         category: 'Finance' },
  { name: 'IconDocument',      Component: IconDocument,      category: 'Content' },
  { name: 'IconWaiting',       Component: IconWaiting,       category: 'Status' },
  { name: 'IconCode',          Component: IconCode,          category: 'Developer' },
  { name: 'IconSettings',      Component: IconSettings,      category: 'Navigation' },
  { name: 'IconSearch',        Component: IconSearch,        category: 'Navigation' },
  { name: 'IconBell',          Component: IconBell,          category: 'Navigation' },
  { name: 'IconHelp',          Component: IconHelp,          category: 'Navigation' },
  { name: 'IconUser',          Component: IconUser,          category: 'Navigation' },
  { name: 'IconChevronDown',   Component: IconChevronDown,   category: 'Directional' },
  { name: 'IconChevronUp',     Component: IconChevronUp,     category: 'Directional' },
  { name: 'IconChevronDown24', Component: IconChevronDown24, category: 'Directional' },
  { name: 'IconChevronUp24',   Component: IconChevronUp24,   category: 'Directional' },
]

const SIZES = [12, 16, 20, 24, 32]
const SIZE_TOKENS: Record<number, string> = {
  12: '--sds-icon-xs',
  14: '--sds-icon-xs2',
  16: '--sds-icon-sm',
  18: '--sds-icon-md',
  20: '--sds-icon-lg',
  24: '--sds-icon-xl',
  32: '--sds-icon-2xl',
}

const IconCard = ({ name, Component }: { name: string; Component: React.FC<{ size?: number }> }) => {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(`<${name} size={20} />`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div
      onClick={copy}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        padding: '20px 12px', border: '1px solid #e8e8e8', borderRadius: 10,
        cursor: 'pointer', background: '#fff', transition: 'border-color 120ms, background 120ms',
        minWidth: 0,
      }}
      title={`Click to copy: <${name} size={20} />`}
    >
      <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6f9', borderRadius: 8 }}>
        <Component size={20} />
      </div>
      <span style={{ fontFamily: mono, fontSize: 10, color: '#494949', textAlign: 'center', wordBreak: 'break-all', lineHeight: 1.4 }}>{name}</span>
      {copied && <span style={{ fontFamily: font, fontSize: 10, color: '#094eff', fontWeight: 600 }}>Copied!</span>}
    </div>
  )
}

export const Icons: StoryObj = {
  name: 'Icons',
  render: () => {
    const categories = [...new Set(ALL_ICONS.map(i => i.category))]
    return (
      <Page>
        <PageHeader
          title="Icons"
          description="Cashmere uses inline SVG icon components with currentColor stroke. All icons accept a size prop and inherit color from their parent. Click any icon to copy its JSX import."
        />

        {/* Usage */}
        <Section title="Usage" description="Import individual icons — do not import the full icon set.">
          <div style={{ background: '#1b1b1b', borderRadius: 10, padding: '20px 24px', overflow: 'auto' }}>
            <pre style={{ fontFamily: mono, fontSize: 13, color: '#fffffc', margin: 0, lineHeight: 1.6 }}>{`import { IconHome, IconSettings } from '@cashfree/cashmere'

// Default size (20px)
<IconHome />

// Custom size
<IconHome size={24} />

// Inherits color from parent
<span style={{ color: 'var(--sds-accent-icon-default)' }}>
  <IconHome size={20} />
</span>`}</pre>
          </div>
        </Section>

        {/* Icon grid by category */}
        {categories.map(cat => (
          <Section key={cat} title={cat}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
              {ALL_ICONS.filter(i => i.category === cat).map(({ name, Component }) => (
                <IconCard key={name} name={name} Component={Component} />
              ))}
            </div>
          </Section>
        ))}

        {/* Size scale */}
        <Section title="Size Scale" description="All available sizes and their corresponding token.">
          <Table headers={['Token', 'Value', 'Preview']}>
            {SIZES.map((size, i) => {
              const token = SIZE_TOKENS[size] || `${size}px`
              return (
                <TR key={size} zebra={i % 2 === 1}>
                  <TD width={200}><Token name={token} /></TD>
                  <TD width={80}><Value>{size}px</Value></TD>
                  <TD>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <IconHome size={size} />
                      <span style={{ fontFamily: font, fontSize: 12, color: '#767676' }}>{size}×{size}px</span>
                    </div>
                  </TD>
                </TR>
              )
            })}
          </Table>
        </Section>

        {/* Color usage */}
        <Section title="Color" description="Icons use currentColor and inherit from parent. Use semantic icon tokens.">
          <Table headers={['Token', 'Value', 'Preview']}>
            {[
              { token: '--sds-neutral-icon-primary',   hex: '#1B1B1B', label: 'Primary'  },
              { token: '--sds-neutral-icon-secondary',  hex: '#494949', label: 'Secondary' },
              { token: '--sds-neutral-icon-muted',      hex: '#767676', label: 'Muted'    },
              { token: '--sds-neutral-icon-disabled',   hex: '#8D8D8D', label: 'Disabled' },
              { token: '--sds-neutral-icon-inverse',    hex: '#FFFFFC', label: 'Inverse'  },
              { token: '--sds-accent-icon-default',     hex: '#094EFF', label: 'Accent'   },
              { token: '--sds-positive-icon-default',   hex: '#009B54', label: 'Positive' },
              { token: '--sds-negative-icon-default',   hex: '#B80000', label: 'Negative' },
              { token: '--sds-warning-icon-default',    hex: '#A06D03', label: 'Warning'  },
            ].map(({ token, hex, label }, i) => (
              <TR key={token} zebra={i % 2 === 1}>
                <TD width={300}><Token name={token} /></TD>
                <TD width={100}><Value>{hex}</Value></TD>
                <TD>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: hex, background: hex === '#FFFFFC' ? '#1b1b1b' : 'transparent', borderRadius: 4, padding: hex === '#FFFFFC' ? '4px' : 0, display: 'inline-flex' }}>
                      <IconHome size={20} />
                    </span>
                    <span style={{ fontFamily: font, fontSize: 12, color: '#767676' }}>{label}</span>
                  </div>
                </TD>
              </TR>
            ))}
          </Table>
        </Section>
      </Page>
    )
  },
}
