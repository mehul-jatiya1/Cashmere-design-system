import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
}

export default meta

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const font = 'DM Sans, sans-serif'

function isLight(hex: string) {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

interface SwatchProps {
  token: string
  hex: string
  label?: string
  wide?: boolean
}

const Swatch = ({ token, hex, label, wide }: SwatchProps) => {
  const light = isLight(hex.replace(/rgba?\([^)]+\)/, '#e0e0e0'))
  const textColor = light ? '#1b1b1b' : '#fffffc'
  const isTransparent = hex.startsWith('rgba')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: wide ? '100%' : 96, flexShrink: 0 }}>
      <div
        style={{
          height: wide ? 48 : 72,
          background: hex,
          borderRadius: '6px 6px 0 0',
          border: '1px solid rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '6px 8px',
          position: 'relative',
        }}
      >
        {isTransparent && (
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '6px 6px 0 0', overflow: 'hidden',
            backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
            zIndex: 0,
          }} />
        )}
        <div style={{ position: 'relative', zIndex: 1, background: hex, padding: '2px 6px', borderRadius: 3 }}>
          <span style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: textColor, letterSpacing: '0.02em' }}>
            {hex.toUpperCase()}
          </span>
        </div>
      </div>
      <div style={{
        padding: '8px 8px 10px',
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderTop: 'none',
        borderRadius: '0 0 6px 6px',
      }}>
        <div style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#1b1b1b', lineHeight: 1.4, wordBreak: 'break-all' }}>
          {label || token.split('-').slice(2).join('-')}
        </div>
        <div style={{ fontFamily: font, fontSize: 10, color: '#767676', marginTop: 2, lineHeight: 1.4, wordBreak: 'break-all' }}>
          {token}
        </div>
      </div>
    </div>
  )
}

interface GroupProps {
  title: string
  description?: string
  children: React.ReactNode
}

const Group = ({ title, description, children }: GroupProps) => (
  <div style={{ marginBottom: 48 }}>
    <div style={{ marginBottom: 16 }}>
      <h2 style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: '#1b1b1b', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {title}
      </h2>
      {description && (
        <p style={{ fontFamily: font, fontSize: 12, color: '#767676', margin: '4px 0 0', lineHeight: 1.5 }}>{description}</p>
      )}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>{children}</div>
  </div>
)

interface SubGroupProps {
  label: string
  children: React.ReactNode
}

const SubGroup = ({ label, children }: SubGroupProps) => (
  <div style={{ marginBottom: 32 }}>
    <div style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
      {label}
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{children}</div>
  </div>
)

const Page = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: 40, background: '#f4f6f9', minHeight: '100vh', fontFamily: font }}>
    {children}
  </div>
)

const PageTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div style={{ marginBottom: 40 }}>
    <h1 style={{ fontFamily: font, fontSize: 28, fontWeight: 700, color: '#1b1b1b', margin: 0 }}>{title}</h1>
    {subtitle && <p style={{ fontFamily: font, fontSize: 14, color: '#5f5f5f', margin: '8px 0 0', lineHeight: 1.6 }}>{subtitle}</p>}
  </div>
)

/* ── Primitive Ramp ──────────────────────────────────────────────────────── */

interface RampProps {
  name: string
  shades: { shade: string; hex: string }[]
}

const Ramp = ({ name, shades }: RampProps) => (
  <div style={{ marginBottom: 32 }}>
    <div style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#767676', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
      {name}
    </div>
    <div style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
      {shades.map(({ shade, hex }) => {
        const light = isLight(hex)
        return (
          <div
            key={shade}
            style={{ flex: 1, background: hex, padding: '12px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
          >
            <span style={{ fontFamily: font, fontSize: 10, fontWeight: 700, color: light ? '#1b1b1b' : '#fffffc' }}>{shade}</span>
            <span style={{ fontFamily: font, fontSize: 9, color: light ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.6)', marginTop: 2 }}>{hex.toUpperCase()}</span>
          </div>
        )
      })}
    </div>
  </div>
)

/* ── Stories ─────────────────────────────────────────────────────────────── */

export const Primitives: StoryObj = {
  name: 'Primitives',
  render: () => (
    <Page>
      <PageTitle
        title="Color Primitives"
        subtitle="Raw color values that form the foundation of the design system. Semantic tokens reference these primitives."
      />

      <Ramp name="Neutral" shades={[
        { shade: '0', hex: '#000000' },
        { shade: '50', hex: '#1B1B1B' },
        { shade: '100', hex: '#323232' },
        { shade: '200', hex: '#494949' },
        { shade: '300', hex: '#5F5F5F' },
        { shade: '400', hex: '#767676' },
        { shade: '500', hex: '#8D8D8D' },
        { shade: '600', hex: '#A4A4A4' },
        { shade: '700', hex: '#BBBBBB' },
        { shade: '800', hex: '#D1D1D1' },
        { shade: '900', hex: '#E8E8E8' },
        { shade: '950', hex: '#F2F2F2' },
        { shade: '1000', hex: '#FFFFFC' },
      ]} />

      <Ramp name="Accent (Brand Blue)" shades={[
        { shade: '50', hex: '#E5EDFF' },
        { shade: '100', hex: '#CCDAFF' },
        { shade: '200', hex: '#9EB9FF' },
        { shade: '300', hex: '#6B95FF' },
        { shade: '400', hex: '#3870FF' },
        { shade: '500', hex: '#094EFF' },
        { shade: '600', hex: '#003BD1' },
        { shade: '700', hex: '#002C9E' },
        { shade: '800', hex: '#001E6B' },
        { shade: '900', hex: '#000E33' },
        { shade: '950', hex: '#00071A' },
      ]} />

      <Ramp name="Positive (Success)" shades={[
        { shade: '50', hex: '#DCFFE9' },
        { shade: '100', hex: '#89F2AF' },
        { shade: '200', hex: '#6ADC96' },
        { shade: '300', hex: '#4AC77F' },
        { shade: '400', hex: '#04AB61' },
        { shade: '500', hex: '#009B54' },
        { shade: '600', hex: '#008641' },
        { shade: '700', hex: '#007030' },
        { shade: '800', hex: '#005B21' },
        { shade: '900', hex: '#004614' },
        { shade: '950', hex: '#00280B' },
      ]} />

      <Ramp name="Negative (Error)" shades={[
        { shade: '50', hex: '#FFE0E0' },
        { shade: '100', hex: '#FFBDBD' },
        { shade: '200', hex: '#FF7A7A' },
        { shade: '300', hex: '#FF3D3D' },
        { shade: '400', hex: '#FA0000' },
        { shade: '500', hex: '#B80000' },
        { shade: '600', hex: '#940000' },
        { shade: '700', hex: '#700000' },
        { shade: '800', hex: '#470000' },
        { shade: '900', hex: '#240000' },
        { shade: '950', hex: '#140000' },
      ]} />

      <Ramp name="Warning" shades={[
        { shade: '50', hex: '#FFF7E6' },
        { shade: '100', hex: '#FEF0D2' },
        { shade: '200', hex: '#FDDFA0' },
        { shade: '300', hex: '#FDCF73' },
        { shade: '400', hex: '#FCC045' },
        { shade: '500', hex: '#FBB016' },
        { shade: '600', hex: '#D89204' },
        { shade: '700', hex: '#A06D03' },
        { shade: '800', hex: '#694702' },
        { shade: '900', hex: '#372501' },
        { shade: '950', hex: '#191100' },
      ]} />

      <Ramp name="Info" shades={[
        { shade: '50', hex: '#E5EDFF' },
        { shade: '100', hex: '#CCDAFF' },
        { shade: '200', hex: '#9EB9FF' },
        { shade: '300', hex: '#6B95FF' },
        { shade: '400', hex: '#3870FF' },
        { shade: '500', hex: '#094EFF' },
        { shade: '600', hex: '#003BD1' },
        { shade: '700', hex: '#002C9E' },
        { shade: '800', hex: '#001E6B' },
        { shade: '900', hex: '#000E33' },
        { shade: '950', hex: '#00071A' },
      ]} />

      <div style={{ marginBottom: 32 }}>
        <div style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#767676', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
          Overlays (base #151515)
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[
            { shade: '100', alpha: '10%', hex: 'rgba(21,21,21,0.1)' },
            { shade: '200', alpha: '20%', hex: 'rgba(21,21,21,0.2)' },
            { shade: '300', alpha: '30%', hex: 'rgba(21,21,21,0.3)' },
            { shade: '400', alpha: '40%', hex: 'rgba(21,21,21,0.4)' },
            { shade: '500', alpha: '50%', hex: 'rgba(21,21,21,0.5)' },
            { shade: '600', alpha: '60%', hex: 'rgba(21,21,21,0.6)' },
            { shade: '700', alpha: '70%', hex: 'rgba(21,21,21,0.7)' },
            { shade: '800', alpha: '80%', hex: 'rgba(21,21,21,0.8)' },
            { shade: '900', alpha: '90%', hex: 'rgba(21,21,21,0.9)' },
            { shade: '950', alpha: '100%', hex: 'rgba(21,21,21,1)' },
          ].map(({ shade, alpha, hex }) => (
            <div key={shade} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 64 }}>
              <div style={{
                width: 64, height: 64, borderRadius: 6,
                backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                backgroundSize: '8px 8px',
                backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
                border: '1px solid rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: hex, borderRadius: 6 }} />
              </div>
              <span style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#1b1b1b' }}>{shade}</span>
              <span style={{ fontFamily: font, fontSize: 10, color: '#767676' }}>{alpha}</span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  ),
}

export const Semantics: StoryObj = {
  name: 'Semantics',
  render: () => (
    <Page>
      <PageTitle
        title="Semantic Color Tokens"
        subtitle="Purpose-driven tokens that map to primitives. Always use these in components — never reference primitives directly."
      />

      <Group title="Neutral" description="Core UI colors for text, backgrounds, and borders.">
        <SubGroup label="Text">
          <Swatch token="--sds-neutral-text-primary" hex="#1B1B1B" label="primary" />
          <Swatch token="--sds-neutral-text-secondary" hex="#494949" label="secondary" />
          <Swatch token="--sds-neutral-text-muted" hex="#767676" label="muted" />
          <Swatch token="--sds-neutral-text-disabled" hex="#8D8D8D" label="disabled" />
          <Swatch token="--sds-neutral-text-inverse" hex="#FFFFFC" label="inverse" />
        </SubGroup>
        <SubGroup label="Icon">
          <Swatch token="--sds-neutral-icon-primary" hex="#1B1B1B" label="primary" />
          <Swatch token="--sds-neutral-icon-secondary" hex="#494949" label="secondary" />
          <Swatch token="--sds-neutral-icon-muted" hex="#767676" label="muted" />
          <Swatch token="--sds-neutral-icon-disabled" hex="#8D8D8D" label="disabled" />
          <Swatch token="--sds-neutral-icon-inverse" hex="#FFFFFC" label="inverse" />
        </SubGroup>
        <SubGroup label="Background — Default">
          <Swatch token="--sds-neutral-bg-default-white" hex="#FFFFFC" label="white" />
          <Swatch token="--sds-neutral-bg-default-subtle" hex="#F2F2F2" label="subtle" />
          <Swatch token="--sds-neutral-bg-default-hover" hex="#F2F2F2" label="hover" />
          <Swatch token="--sds-neutral-bg-default-muted" hex="#D1D1D1" label="muted" />
          <Swatch token="--sds-neutral-bg-default-active" hex="#D1D1D1" label="active" />
          <Swatch token="--sds-neutral-bg-default-pressed" hex="#BBBBBB" label="pressed" />
          <Swatch token="--sds-neutral-bg-default-disabled" hex="#E8E8E8" label="disabled" />
        </SubGroup>
        <SubGroup label="Background — Inverse">
          <Swatch token="--sds-neutral-bg-inverse-inverse" hex="#1B1B1B" label="inverse" />
          <Swatch token="--sds-neutral-bg-inverse-hover" hex="#494949" label="hover" />
          <Swatch token="--sds-neutral-bg-inverse-active" hex="#5F5F5F" label="active" />
          <Swatch token="--sds-neutral-bg-inverse-pressed" hex="#000000" label="pressed" />
          <Swatch token="--sds-neutral-bg-inverse-disabled" hex="#323232" label="disabled" />
        </SubGroup>
        <SubGroup label="Background — Inverse Subtle">
          <Swatch token="--sds-neutral-bg-inversesubtle-subtle" hex="#494949" label="subtle" />
          <Swatch token="--sds-neutral-bg-inversesubtle-hover" hex="#5F5F5F" label="hover" />
          <Swatch token="--sds-neutral-bg-inversesubtle-active" hex="#767676" label="active" />
          <Swatch token="--sds-neutral-bg-inversesubtle-pressed" hex="#1B1B1B" label="pressed" />
          <Swatch token="--sds-neutral-bg-inversesubtle-disabled" hex="#323232" label="disabled" />
        </SubGroup>
        <SubGroup label="Border">
          <Swatch token="--sds-neutral-border-default" hex="#1B1B1B" label="default" />
          <Swatch token="--sds-neutral-border-strong" hex="#5F5F5F" label="strong" />
          <Swatch token="--sds-neutral-border-subtle" hex="#A4A4A4" label="subtle" />
          <Swatch token="--sds-neutral-border-muted" hex="#BBBBBB" label="muted" />
          <Swatch token="--sds-neutral-border-medium" hex="#D1D1D1" label="medium" />
          <Swatch token="--sds-neutral-border-light" hex="#E8E8E8" label="light" />
          <Swatch token="--sds-neutral-border-disabled" hex="#D1D1D1" label="disabled" />
          <Swatch token="--sds-neutral-border-inverse" hex="#FFFFFC" label="inverse" />
        </SubGroup>
        <SubGroup label="Divider">
          <Swatch token="--sds-neutral-divider-default" hex="#5F5F5F" label="default" />
          <Swatch token="--sds-neutral-divider-subtle" hex="#A4A4A4" label="subtle" />
        </SubGroup>
      </Group>

      <Group title="Accent" description="Primary brand blue used for CTAs, links, and interactive elements.">
        <SubGroup label="Text &amp; Icon">
          <Swatch token="--sds-accent-text-default" hex="#094EFF" label="text-default" />
          <Swatch token="--sds-accent-text-subtle" hex="#FFFFFC" label="text-subtle" />
          <Swatch token="--sds-accent-icon-default" hex="#094EFF" label="icon-default" />
          <Swatch token="--sds-accent-icon-subtle" hex="#FFFFFC" label="icon-subtle" />
          <Swatch token="--sds-accent-icon-disabled" hex="#E8E8E8" label="icon-disabled" />
        </SubGroup>
        <SubGroup label="Background">
          <Swatch token="--sds-accent-bg-default" hex="#094EFF" label="default" />
          <Swatch token="--sds-accent-bg-hover" hex="#3870FF" label="hover" />
          <Swatch token="--sds-accent-bg-pressed" hex="#003BD1" label="pressed" />
          <Swatch token="--sds-accent-bg-disabled" hex="#E8E8E8" label="disabled" />
          <Swatch token="--sds-accent-bg-subtle" hex="#E5EDFF" label="subtle" />
          <Swatch token="--sds-accent-bg-subtlehover" hex="#E5EDFF" label="subtlehover" />
          <Swatch token="--sds-accent-bg-subtlepressed" hex="#CCDAFF" label="subtlepressed" />
        </SubGroup>
        <SubGroup label="Border">
          <Swatch token="--sds-accent-border-default" hex="#003BD1" label="default" />
          <Swatch token="--sds-accent-border-subtle" hex="#094EFF" label="subtle" />
          <Swatch token="--sds-accent-border-strong" hex="#002C9E" label="strong" />
        </SubGroup>
      </Group>

      <Group title="Positive" description="Success states, confirmations, and positive outcomes.">
        <SubGroup label="Text &amp; Icon">
          <Swatch token="--sds-positive-text-default" hex="#007030" label="text-default" />
          <Swatch token="--sds-positive-text-subtle" hex="#FFFFFC" label="text-subtle" />
          <Swatch token="--sds-positive-icon-default" hex="#009B54" label="icon-default" />
          <Swatch token="--sds-positive-icon-subtle" hex="#FFFFFC" label="icon-subtle" />
          <Swatch token="--sds-positive-icon-disabled" hex="#E8E8E8" label="icon-disabled" />
        </SubGroup>
        <SubGroup label="Background">
          <Swatch token="--sds-positive-bg-default" hex="#009B54" label="default" />
          <Swatch token="--sds-positive-bg-hover" hex="#04AB61" label="hover" />
          <Swatch token="--sds-positive-bg-active" hex="#008641" label="active" />
          <Swatch token="--sds-positive-bg-pressed" hex="#008641" label="pressed" />
          <Swatch token="--sds-positive-bg-disabled" hex="#E8E8E8" label="disabled" />
          <Swatch token="--sds-positive-bg-subtle" hex="#DCFFE9" label="subtle" />
          <Swatch token="--sds-positive-bg-subtlehover" hex="#DCFFE9" label="subtlehover" />
          <Swatch token="--sds-positive-bg-subtlepressed" hex="#89F2AF" label="subtlepressed" />
        </SubGroup>
        <SubGroup label="Border">
          <Swatch token="--sds-positive-border-default" hex="#008641" label="default" />
          <Swatch token="--sds-positive-border-subtle" hex="#DCFFE9" label="subtle" />
          <Swatch token="--sds-positive-border-strong" hex="#007030" label="strong" />
        </SubGroup>
      </Group>

      <Group title="Negative" description="Error states, destructive actions, and failure feedback.">
        <SubGroup label="Text &amp; Icon">
          <Swatch token="--sds-negative-text-default" hex="#B80000" label="text-default" />
          <Swatch token="--sds-negative-icon-default" hex="#B80000" label="icon-default" />
        </SubGroup>
        <SubGroup label="Background">
          <Swatch token="--sds-negative-bg-default" hex="#B80000" label="default" />
          <Swatch token="--sds-negative-bg-hover" hex="#FA0000" label="hover" />
          <Swatch token="--sds-negative-bg-active" hex="#940000" label="active" />
          <Swatch token="--sds-negative-bg-pressed" hex="#940000" label="pressed" />
          <Swatch token="--sds-negative-bg-disabled" hex="#E8E8E8" label="disabled" />
          <Swatch token="--sds-negative-bg-subtle" hex="#FFE0E0" label="subtle" />
          <Swatch token="--sds-negative-bg-subtlehover" hex="#FFE0E0" label="subtlehover" />
          <Swatch token="--sds-negative-bg-subtlepressed" hex="#FFBDBD" label="subtlepressed" />
        </SubGroup>
        <SubGroup label="Border">
          <Swatch token="--sds-negative-border-default" hex="#940000" label="default" />
          <Swatch token="--sds-negative-border-subtle" hex="#B80000" label="subtle" />
          <Swatch token="--sds-negative-border-strong" hex="#700000" label="strong" />
        </SubGroup>
      </Group>

      <Group title="Warning" description="Caution states, alerts, and non-critical issues.">
        <SubGroup label="Text &amp; Icon">
          <Swatch token="--sds-warning-text-default" hex="#A06D03" label="text-default" />
          <Swatch token="--sds-warning-icon-default" hex="#A06D03" label="icon-default" />
        </SubGroup>
        <SubGroup label="Background">
          <Swatch token="--sds-warning-bg-default" hex="#D89204" label="default" />
          <Swatch token="--sds-warning-bg-hover" hex="#FBB016" label="hover" />
          <Swatch token="--sds-warning-bg-active" hex="#694702" label="active" />
          <Swatch token="--sds-warning-bg-pressed" hex="#694702" label="pressed" />
          <Swatch token="--sds-warning-bg-disabled" hex="#E8E8E8" label="disabled" />
          <Swatch token="--sds-warning-bg-subtle" hex="#FFF7E6" label="subtle" />
          <Swatch token="--sds-warning-bg-subtlehover" hex="#FFF7E6" label="subtlehover" />
          <Swatch token="--sds-warning-bg-subtlepressed" hex="#FEF0D2" label="subtlepressed" />
        </SubGroup>
        <SubGroup label="Border">
          <Swatch token="--sds-warning-border-default" hex="#D89204" label="default" />
          <Swatch token="--sds-warning-border-subtle" hex="#A06D03" label="subtle" />
          <Swatch token="--sds-warning-border-strong" hex="#694702" label="strong" />
        </SubGroup>
      </Group>

      <Group title="Info" description="Informational messages and neutral-attention states.">
        <SubGroup label="Text &amp; Icon">
          <Swatch token="--sds-info-text-default" hex="#094EFF" label="text-default" />
          <Swatch token="--sds-info-icon-default" hex="#094EFF" label="icon-default" />
        </SubGroup>
        <SubGroup label="Background">
          <Swatch token="--sds-info-bg-default" hex="#094EFF" label="default" />
          <Swatch token="--sds-info-bg-subtle" hex="#E5EDFF" label="subtle" />
        </SubGroup>
        <SubGroup label="Border">
          <Swatch token="--sds-info-border-default" hex="#003BD1" label="default" />
        </SubGroup>
      </Group>

      <Group title="Focus" description="Keyboard focus ring colors for accessibility.">
        <SubGroup label="">
          <Swatch token="--sds-focus-infocus-default" hex="#094EFF" label="default" />
          <Swatch token="--sds-focus-infocus-subtle" hex="#E8E8E8" label="subtle" />
          <Swatch token="--sds-focus-infocus-inverse" hex="#5F5F5F" label="inverse" />
          <Swatch token="--sds-focus-infocus-error" hex="#B80000" label="error" />
        </SubGroup>
      </Group>

      <Group title="Data Visualization" description="Colors for charts, graphs, and data display.">
        <SubGroup label="">
          <Swatch token="--sds-data-primary" hex="#1B1B1B" label="primary" />
          <Swatch token="--sds-data-secondary" hex="#494949" label="secondary" />
          <Swatch token="--sds-data-positive" hex="#008641" label="positive" />
          <Swatch token="--sds-data-negative" hex="#940000" label="negative" />
          <Swatch token="--sds-data-warning" hex="#D89204" label="warning" />
          <Swatch token="--sds-data-neutral" hex="#1B1B1B" label="neutral" />
          <Swatch token="--sds-data-inverse" hex="#FFFFFC" label="inverse" />
        </SubGroup>
      </Group>
    </Page>
  ),
}
