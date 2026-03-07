import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
}

export default meta

const label = (s: string) => (
  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#767676', margin: '32px 0 12px' }}>
    {s}
  </h3>
)

const divider = () => <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '4px 0' }} />

export const TypeScale: StoryObj = {
  render: () => (
    <div style={{ padding: 8 }}>
      {label('Headings')}
      {[
        { name: 'H1 · 48px · Semibold', size: 48, weight: 600, lh: 1.1 },
        { name: 'H2 · 40px · Semibold', size: 40, weight: 600, lh: 1.2 },
        { name: 'H3 · 32px · Semibold', size: 32, weight: 600, lh: 1.25 },
        { name: 'H4 · 28px · Semibold', size: 28, weight: 600, lh: 1.3 },
        { name: 'H5 · 24px · Semibold', size: 24, weight: 600, lh: 1.33 },
        { name: 'H6 · 20px · Bold', size: 20, weight: 700, lh: 1.4 },
        { name: 'H7 · 16px · Bold', size: 16, weight: 700, lh: 1.5 },
      ].map(({ name, size, weight, lh }) => (
        <div key={name}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '12px 0' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: size, fontWeight: weight, lineHeight: lh, color: '#1b1b1b', flex: 1 }}>
              The quick brown fox
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#a4a4a4', whiteSpace: 'nowrap', flexShrink: 0 }}>{name}</span>
          </div>
          {divider()}
        </div>
      ))}

      {label('Body')}
      {[
        { name: 'Body Large · 16px · Medium', size: 16, weight: 500, lh: 1.5 },
        { name: 'Body Large · 16px · Semibold', size: 16, weight: 600, lh: 1.5 },
        { name: 'Body Large · 16px · Bold', size: 16, weight: 700, lh: 1.5 },
        { name: 'Body Small · 14px · Medium', size: 14, weight: 500, lh: 1.43 },
        { name: 'Body Small · 14px · Semibold', size: 14, weight: 600, lh: 1.43 },
        { name: 'Body Small · 14px · Bold', size: 14, weight: 700, lh: 1.43 },
        { name: 'Body XS · 12px · Medium', size: 12, weight: 500, lh: 1.5 },
        { name: 'Body XS · 12px · Semibold', size: 12, weight: 600, lh: 1.5 },
        { name: 'Body XS · 12px · Bold', size: 12, weight: 700, lh: 1.5 },
      ].map(({ name, size, weight, lh }) => (
        <div key={name}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '10px 0' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: size, fontWeight: weight, lineHeight: lh, color: '#1b1b1b', flex: 1 }}>
              The quick brown fox jumps over the lazy dog
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#a4a4a4', whiteSpace: 'nowrap', flexShrink: 0 }}>{name}</span>
          </div>
          {divider()}
        </div>
      ))}

      {label('Overline')}
      {[
        { name: 'Overline · 12px · Semibold · Uppercase', size: 12, weight: 600, upper: true },
        { name: 'Overline · 12px · Bold · Uppercase', size: 12, weight: 700, upper: true },
      ].map(({ name, size, weight, upper }) => (
        <div key={name}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '10px 0' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: size, fontWeight: weight, lineHeight: 1.33, letterSpacing: '0.06em', textTransform: upper ? 'uppercase' : undefined, color: '#1b1b1b', flex: 1 }}>
              Section Label
            </span>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#a4a4a4', whiteSpace: 'nowrap', flexShrink: 0 }}>{name}</span>
          </div>
          {divider()}
        </div>
      ))}
    </div>
  ),
}

export const FontWeights: StoryObj = {
  render: () => (
    <div style={{ padding: 8, display: 'flex', gap: 48 }}>
      {[
        { label: 'Regular', weight: 400, token: '--sds-weight-regular' },
        { label: 'Medium', weight: 500, token: '--sds-weight-medium' },
        { label: 'Semibold', weight: 600, token: '--sds-weight-semibold' },
        { label: 'Bold', weight: 700, token: '--sds-weight-bold' },
      ].map(({ label: l, weight, token }) => (
        <div key={weight} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 24, fontWeight: weight, color: '#1b1b1b' }}>Aa</span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 600, color: '#1b1b1b' }}>{l}</span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#767676' }}>{weight}</span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#a4a4a4' }}>{token}</span>
        </div>
      ))}
    </div>
  ),
}
