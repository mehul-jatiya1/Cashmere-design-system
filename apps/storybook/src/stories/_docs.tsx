/**
 * Shared layout primitives for all foundation doc pages.
 * Import from here to keep all stories visually consistent.
 */
import React from 'react'

export const font = 'DM Sans, sans-serif'
export const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace'

/* ── Page shell ──────────────────────────────────────────────────────────── */

export const Page = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '48px 56px', background: '#fff', minHeight: '100vh', fontFamily: font, maxWidth: 1024, margin: '0 auto' }}>
    {children}
  </div>
)

export const PageHeader = ({ title, description }: { title: string; description: string }) => (
  <div style={{ paddingBottom: 32, borderBottom: '1px solid #f2f2f2', marginBottom: 40 }}>
    <h1 style={{ fontFamily: font, fontSize: 30, fontWeight: 700, color: '#1b1b1b', margin: '0 0 10px' }}>{title}</h1>
    <p style={{ fontFamily: font, fontSize: 14, color: '#5f5f5f', margin: 0, lineHeight: 1.7, maxWidth: 640 }}>{description}</p>
  </div>
)

/* ── Section ─────────────────────────────────────────────────────────────── */

export const Section = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: 48 }}>
    <div style={{ marginBottom: 16 }}>
      <h2 style={{ fontFamily: font, fontSize: 18, fontWeight: 700, color: '#1b1b1b', margin: '0 0 6px' }}>{title}</h2>
      {description && <p style={{ fontFamily: font, fontSize: 13, color: '#767676', margin: 0, lineHeight: 1.6 }}>{description}</p>}
    </div>
    {children}
  </div>
)

/* ── Table ───────────────────────────────────────────────────────────────── */

export const Table = ({ headers, children }: { headers: string[]; children: React.ReactNode }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e8e8e8', borderRadius: 8, overflow: 'hidden', tableLayout: 'fixed' }}>
    <thead>
      <tr style={{ background: '#fafafa' }}>
        {headers.map((h, i) => (
          <th key={i} style={{ padding: '10px 16px', textAlign: 'left', fontFamily: font, fontSize: 12, fontWeight: 600, color: '#767676', borderBottom: '1px solid #e8e8e8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
)

export const TR = ({ children, zebra }: { children: React.ReactNode; zebra?: boolean }) => (
  <tr style={{ background: zebra ? '#fafafa' : '#fff', transition: 'background 100ms' }}>{children}</tr>
)

export const TD = ({ children, width, mono: isMono }: { children: React.ReactNode; width?: number | string; mono?: boolean }) => (
  <td style={{ padding: '12px 16px', borderBottom: '1px solid #f2f2f2', fontFamily: isMono ? mono : font, fontSize: 13, color: '#1b1b1b', verticalAlign: 'middle', width: width || 'auto', wordBreak: 'break-word' }}>{children}</td>
)

/* ── Token chip ──────────────────────────────────────────────────────────── */

export const Token = ({ name }: { name: string }) => (
  <span style={{ fontFamily: mono, fontSize: 11, color: '#094eff', background: '#e5edff', padding: '3px 8px', borderRadius: 4, display: 'inline-block', lineHeight: 1.4 }}>{name}</span>
)

export const Value = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontFamily: mono, fontSize: 12, color: '#494949' }}>{children}</span>
)

/* ── Color swatch ────────────────────────────────────────────────────────── */

export const ColorSwatch = ({ hex, size = 28 }: { hex: string; size?: number }) => (
  <span style={{
    display: 'inline-block', width: size, height: size, borderRadius: 6,
    background: hex, border: '1px solid rgba(0,0,0,0.1)',
    flexShrink: 0, verticalAlign: 'middle',
  }} />
)
