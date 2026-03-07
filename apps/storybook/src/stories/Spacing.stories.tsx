import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'padded' },
}

export default meta

const spacingScale = [
  { token: '--sds-spacing-0',   value: '0px',   px: 0 },
  { token: '--sds-spacing-2',   value: '2px',   px: 2 },
  { token: '--sds-spacing-4',   value: '4px',   px: 4 },
  { token: '--sds-spacing-8',   value: '8px',   px: 8 },
  { token: '--sds-spacing-10',  value: '10px',  px: 10 },
  { token: '--sds-spacing-12',  value: '12px',  px: 12 },
  { token: '--sds-spacing-16',  value: '16px',  px: 16 },
  { token: '--sds-spacing-20',  value: '20px',  px: 20 },
  { token: '--sds-spacing-24',  value: '24px',  px: 24 },
  { token: '--sds-spacing-32',  value: '32px',  px: 32 },
  { token: '--sds-spacing-40',  value: '40px',  px: 40 },
  { token: '--sds-spacing-48',  value: '48px',  px: 48 },
  { token: '--sds-spacing-64',  value: '64px',  px: 64 },
  { token: '--sds-spacing-96',  value: '96px',  px: 96 },
  { token: '--sds-spacing-160', value: '160px', px: 160 },
]

export const Scale: StoryObj = {
  render: () => (
    <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {spacingScale.map(({ token, value, px }) => (
        <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: Math.max(px, 1), height: 24, background: '#094eff', borderRadius: 3, flexShrink: 0 }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, color: '#1b1b1b', width: 60 }}>{value}</span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#767676' }}>{token}</span>
        </div>
      ))}
    </div>
  ),
}

const radii = [
  { token: '--sds-radius-50',   value: '0px',    px: 0 },
  { token: '--sds-radius-100',  value: '2px',    px: 2 },
  { token: '--sds-radius-200',  value: '4px',    px: 4 },
  { token: '--sds-radius-300',  value: '8px',    px: 8 },
  { token: '--sds-radius-400',  value: '12px',   px: 12 },
  { token: '--sds-radius-500',  value: '14px',   px: 14 },
  { token: '--sds-radius-600',  value: '16px',   px: 16 },
  { token: '--sds-radius-700',  value: '18px',   px: 18 },
  { token: '--sds-radius-800',  value: '20px',   px: 20 },
  { token: '--sds-radius-900',  value: '24px',   px: 24 },
  { token: '--sds-radius-1000', value: '32px',   px: 32 },
  { token: '--sds-radius-full', value: '9999px', px: 9999 },
]

export const BorderRadius: StoryObj = {
  render: () => (
    <div style={{ padding: 8, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {radii.map(({ token, value, px }) => (
        <div key={token} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 64, height: 64, background: '#e5edff', border: '2px solid #094eff', borderRadius: Math.min(px, 32) }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, color: '#1b1b1b' }}>{value}</span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#767676', textAlign: 'center', maxWidth: 80 }}>{token}</span>
        </div>
      ))}
    </div>
  ),
}

export const Strokes: StoryObj = {
  render: () => (
    <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[
        { token: '--sds-stroke-border', value: '1px', label: 'Border' },
        { token: '--sds-stroke-focus', value: '2px', label: 'Focus' },
        { token: '--sds-stroke-focuslarge', value: '8px', label: 'Focus Large' },
      ].map(({ token, value, label }) => (
        <div key={token} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 120, height: 40, borderRadius: 6, border: `${value} solid #094eff`, background: '#f4f6f9', flexShrink: 0 }} />
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#1b1b1b' }}>{label} · {value}</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#767676', marginTop: 2 }}>{token}</div>
          </div>
        </div>
      ))}
    </div>
  ),
}
