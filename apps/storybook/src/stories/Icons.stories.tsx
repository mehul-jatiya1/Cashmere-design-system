import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  IconHome,
  IconBargraph,
  IconBookOpenText,
  IconMoney,
  IconDocument,
  IconWaiting,
  IconCode,
  IconSettings,
  IconChevronDown,
  IconChevronUp,
  IconChevronDown24,
  IconChevronUp24,
} from '@cashfree/cashmere'

const meta: Meta = {
  title: 'Foundations/Icons',
  parameters: { layout: 'padded' },
}

export default meta

const icons = [
  { name: 'IconHome',          Component: IconHome },
  { name: 'IconBargraph',      Component: IconBargraph },
  { name: 'IconBookOpenText',  Component: IconBookOpenText },
  { name: 'IconMoney',         Component: IconMoney },
  { name: 'IconDocument',      Component: IconDocument },
  { name: 'IconWaiting',       Component: IconWaiting },
  { name: 'IconCode',          Component: IconCode },
  { name: 'IconSettings',      Component: IconSettings },
  { name: 'IconChevronDown',   Component: IconChevronDown },
  { name: 'IconChevronUp',     Component: IconChevronUp },
  { name: 'IconChevronDown24', Component: IconChevronDown24 },
  { name: 'IconChevronUp24',   Component: IconChevronUp24 },
]

export const AllIcons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24, fontFamily: 'DM Sans, sans-serif' }}>
      {icons.map(({ name, Component }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6f9', borderRadius: 8 }}>
            <Component size={20} />
          </div>
          <span style={{ fontSize: 11, color: '#5f5f5f', textAlign: 'center', maxWidth: 80 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 24, fontFamily: 'DM Sans, sans-serif' }}>
      {[12, 16, 20, 24, 32].map(size => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <IconHome size={size} />
          <span style={{ fontSize: 11, color: '#5f5f5f' }}>{size}px</span>
        </div>
      ))}
    </div>
  ),
}
