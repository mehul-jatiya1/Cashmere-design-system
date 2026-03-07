import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
}

export default meta

/* ── Shared styles ───────────────────────────────────────────────────────── */

const font = 'DM Sans, sans-serif'
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace'

const page: React.CSSProperties = {
  padding: '40px 48px',
  background: '#fff',
  minHeight: '100vh',
  fontFamily: font,
  maxWidth: 960,
  margin: '0 auto',
}

const sectionTitle: React.CSSProperties = {
  fontFamily: font,
  fontSize: 20,
  fontWeight: 700,
  color: '#1b1b1b',
  margin: '40px 0 12px',
}

const table: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  border: '1px solid #e8e8e8',
  borderRadius: 8,
  overflow: 'hidden',
  fontSize: 14,
  fontFamily: font,
}

const th: React.CSSProperties = {
  padding: '10px 16px',
  background: '#f9f9f9',
  borderBottom: '1px solid #e8e8e8',
  textAlign: 'left',
  fontWeight: 600,
  fontSize: 13,
  color: '#1b1b1b',
}

const td: React.CSSProperties = {
  padding: '14px 16px',
  borderBottom: '1px solid #f2f2f2',
  verticalAlign: 'middle',
}

const tokenName: React.CSSProperties = {
  fontFamily: mono,
  fontSize: 12,
  color: '#494949',
  background: '#f4f6f9',
  padding: '3px 8px',
  borderRadius: 4,
  display: 'inline-block',
}

/* ── Stories ─────────────────────────────────────────────────────────────── */

export const Typography: StoryObj = {
  name: 'Typography',
  render: () => (
    <div style={page}>
      <h1 style={{ fontFamily: font, fontSize: 28, fontWeight: 700, color: '#1b1b1b', margin: '0 0 8px' }}>
        Typography
      </h1>
      <p style={{ fontFamily: font, fontSize: 14, color: '#5f5f5f', margin: '0 0 8px', lineHeight: 1.6 }}>
        All typography tokens use <strong>DM Sans</strong> and are referenced via <code style={{ ...tokenName, fontSize: 11 }}>--sds-*</code> CSS custom properties.
        Never use hardcoded font values in components — always reference these tokens.
      </p>

      {/* ── Font Family ── */}
      <h2 style={sectionTitle}>Font Family</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={{ ...th, width: 260 }}>Token Name</th>
            <th style={th}>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}><span style={tokenName}>--sds-family-web-font</span></td>
            <td style={td}>
              <span style={{ fontFamily: font, fontSize: 14, color: '#1b1b1b' }}>"DM Sans", sans-serif</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ── Font Weight ── */}
      <h2 style={sectionTitle}>Font Weight</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={{ ...th, width: 260 }}>Token Name</th>
            <th style={{ ...th, width: 80 }}>Value</th>
            <th style={th}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {[
            { token: '--sds-weight-regular',  value: '400', label: 'Regular' },
            { token: '--sds-weight-medium',   value: '500', label: 'Medium' },
            { token: '--sds-weight-semibold', value: '600', label: 'Semibold' },
            { token: '--sds-weight-bold',     value: '700', label: 'Bold' },
          ].map(({ token, value, label }) => (
            <tr key={token}>
              <td style={td}><span style={tokenName}>{token}</span></td>
              <td style={{ ...td, color: '#494949', fontWeight: 600 }}>{value}</td>
              <td style={td}>
                <span style={{ fontFamily: `var(--sds-family-web-font)`, fontSize: 16, fontWeight: `var(${token})` as any, color: '#1b1b1b' }}>
                  {label} — The quick brown fox jumps over the lazy dog
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── Font Size ── */}
      <h2 style={sectionTitle}>Font Size</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={{ ...th, width: 200 }}>Token Name</th>
            <th style={{ ...th, width: 80 }}>Value</th>
            <th style={th}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {[
            { token: '--sds-size-10', value: '10px' },
            { token: '--sds-size-11', value: '11px' },
            { token: '--sds-size-12', value: '12px' },
            { token: '--sds-size-14', value: '14px' },
            { token: '--sds-size-16', value: '16px' },
            { token: '--sds-size-18', value: '18px' },
            { token: '--sds-size-20', value: '20px' },
            { token: '--sds-size-24', value: '24px' },
            { token: '--sds-size-28', value: '28px' },
            { token: '--sds-size-32', value: '32px' },
            { token: '--sds-size-40', value: '40px' },
            { token: '--sds-size-48', value: '48px' },
            { token: '--sds-size-56', value: '56px' },
          ].map(({ token, value }) => (
            <tr key={token}>
              <td style={td}><span style={tokenName}>{token}</span></td>
              <td style={{ ...td, color: '#494949', fontWeight: 600 }}>{value}</td>
              <td style={{ ...td, padding: '8px 16px' }}>
                <span style={{ fontFamily: `var(--sds-family-web-font)`, fontSize: `var(${token})`, fontWeight: `var(--sds-weight-medium)` as any, color: '#1b1b1b', lineHeight: 1.3, display: 'block' }}>
                  Era of rising Payments
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── Line Height ── */}
      <h2 style={sectionTitle}>Line Height</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={{ ...th, width: 200 }}>Style</th>
            <th style={{ ...th, width: 100 }}>Line Height</th>
            <th style={{ ...th, width: 200 }}>Size Token</th>
            <th style={th}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {[
            { label: 'H1',           lh: 1.1,  sizeToken: '--sds-size-48' },
            { label: 'H2',           lh: 1.2,  sizeToken: '--sds-size-40' },
            { label: 'H3',           lh: 1.25, sizeToken: '--sds-size-32' },
            { label: 'H4',           lh: 1.3,  sizeToken: '--sds-size-28' },
            { label: 'H5',           lh: 1.33, sizeToken: '--sds-size-24' },
            { label: 'H6',           lh: 1.4,  sizeToken: '--sds-size-20' },
            { label: 'H7 / Body L',  lh: 1.5,  sizeToken: '--sds-size-16' },
            { label: 'Body S',       lh: 1.43, sizeToken: '--sds-size-14' },
            { label: 'Body XS / Overline', lh: 1.5, sizeToken: '--sds-size-12' },
          ].map(({ label, lh, sizeToken }) => (
            <tr key={label}>
              <td style={td}><span style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: '#1b1b1b' }}>{label}</span></td>
              <td style={{ ...td, color: '#494949', fontWeight: 600 }}>{lh}</td>
              <td style={td}><span style={tokenName}>{sizeToken}</span></td>
              <td style={{ ...td, padding: '8px 16px' }}>
                <span style={{
                  fontFamily: `var(--sds-family-web-font)`,
                  fontSize: `var(${sizeToken})`,
                  fontWeight: `var(--sds-weight-medium)` as any,
                  lineHeight: lh,
                  color: '#1b1b1b',
                  display: 'block',
                }}>
                  Era of rising Payments
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── Text Styles ── */}
      <h2 style={sectionTitle}>Text Styles</h2>
      <p style={{ fontFamily: font, fontSize: 13, color: '#767676', margin: '0 0 12px', lineHeight: 1.5 }}>
        Named styles combining size, weight, and line-height tokens. Use the CSS class directly on elements.
      </p>
      <table style={table}>
        <thead>
          <tr>
            <th style={{ ...th, width: 260 }}>CSS Class</th>
            <th style={{ ...th, width: 80 }}>Size</th>
            <th style={{ ...th, width: 100 }}>Weight</th>
            <th style={th}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {[
            { cls: 'sds-typography-h1-semibold',           size: '48px', weight: 'Semibold', sizeT: '--sds-size-48', weightT: '--sds-weight-semibold', lh: 1.1 },
            { cls: 'sds-typography-h2-semibold',           size: '40px', weight: 'Semibold', sizeT: '--sds-size-40', weightT: '--sds-weight-semibold', lh: 1.2 },
            { cls: 'sds-typography-h3-semibold',           size: '32px', weight: 'Semibold', sizeT: '--sds-size-32', weightT: '--sds-weight-semibold', lh: 1.25 },
            { cls: 'sds-typography-h4-semibold',           size: '28px', weight: 'Semibold', sizeT: '--sds-size-28', weightT: '--sds-weight-semibold', lh: 1.3 },
            { cls: 'sds-typography-h5-semibold',           size: '24px', weight: 'Semibold', sizeT: '--sds-size-24', weightT: '--sds-weight-semibold', lh: 1.33 },
            { cls: 'sds-typography-h6-bold',               size: '20px', weight: 'Bold',     sizeT: '--sds-size-20', weightT: '--sds-weight-bold',     lh: 1.4 },
            { cls: 'sds-typography-h7-bold',               size: '16px', weight: 'Bold',     sizeT: '--sds-size-16', weightT: '--sds-weight-bold',     lh: 1.5 },
            { cls: 'sds-typography-bodylarge-medium',      size: '16px', weight: 'Medium',   sizeT: '--sds-size-16', weightT: '--sds-weight-medium',   lh: 1.5 },
            { cls: 'sds-typography-bodylarge-semibold',    size: '16px', weight: 'Semibold', sizeT: '--sds-size-16', weightT: '--sds-weight-semibold', lh: 1.5 },
            { cls: 'sds-typography-bodylarge-bold',        size: '16px', weight: 'Bold',     sizeT: '--sds-size-16', weightT: '--sds-weight-bold',     lh: 1.5 },
            { cls: 'sds-typography-bodysmall-medium',      size: '14px', weight: 'Medium',   sizeT: '--sds-size-14', weightT: '--sds-weight-medium',   lh: 1.43 },
            { cls: 'sds-typography-bodysmall-semibold',    size: '14px', weight: 'Semibold', sizeT: '--sds-size-14', weightT: '--sds-weight-semibold', lh: 1.43 },
            { cls: 'sds-typography-bodysmall-bold',        size: '14px', weight: 'Bold',     sizeT: '--sds-size-14', weightT: '--sds-weight-bold',     lh: 1.43 },
            { cls: 'sds-typography-bodyextrasmall-medium', size: '12px', weight: 'Medium',   sizeT: '--sds-size-12', weightT: '--sds-weight-medium',   lh: 1.5 },
            { cls: 'sds-typography-bodyextrasmall-bold',   size: '12px', weight: 'Bold',     sizeT: '--sds-size-12', weightT: '--sds-weight-bold',     lh: 1.5 },
            { cls: 'sds-typography-overline-semibold',     size: '12px', weight: 'Semibold', sizeT: '--sds-size-12', weightT: '--sds-weight-semibold', lh: 1.33, upper: true },
            { cls: 'sds-typography-overline-bold',         size: '12px', weight: 'Bold',     sizeT: '--sds-size-12', weightT: '--sds-weight-bold',     lh: 1.33, upper: true },
          ].map(({ cls, size, weight, sizeT, weightT, lh, upper }) => (
            <tr key={cls}>
              <td style={td}><span style={tokenName}>.{cls}</span></td>
              <td style={{ ...td, color: '#494949', fontFamily: mono, fontSize: 12 }}>{size}</td>
              <td style={{ ...td, color: '#494949', fontFamily: mono, fontSize: 12 }}>{weight}</td>
              <td style={{ ...td, padding: '8px 16px' }}>
                <span style={{
                  fontFamily: `var(--sds-family-web-font)`,
                  fontSize: `var(${sizeT})`,
                  fontWeight: `var(${weightT})` as any,
                  lineHeight: lh,
                  letterSpacing: upper ? '0.06em' : undefined,
                  textTransform: upper ? 'uppercase' : undefined,
                  color: '#1b1b1b',
                  display: 'block',
                }}>
                  Era of rising Payments
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
}
