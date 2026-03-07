import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Page, PageHeader, Section, Table, TR, TD, Token, Value, ColorSwatch, font, mono } from './_docs'

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
}
export default meta

/* ── Primitive ramp ──────────────────────────────────────────────────────── */

const Ramp = ({ name, shades }: { name: string; shades: { label: string; hex: string }[] }) => {
  const isLight = (hex: string) => {
    const [r, g, b] = [hex.slice(1,3), hex.slice(3,5), hex.slice(5,7)].map(h => parseInt(h, 16))
    return (r * 299 + g * 587 + b * 114) / 1000 > 140
  }
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: '#767676', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{name}</div>
      <div style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.07)' }}>
        {shades.map(({ label, hex }) => (
          <div key={label} style={{ flex: 1, background: hex, padding: '12px 4px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <span style={{ fontFamily: font, fontSize: 10, fontWeight: 700, color: isLight(hex) ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.85)' }}>{label}</span>
            <span style={{ fontFamily: mono, fontSize: 8, color: isLight(hex) ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)' }}>{hex.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Semantic table ──────────────────────────────────────────────────────── */

const ColorRow = ({ token, hex, description, i }: { token: string; hex: string; description?: string; i: number }) => (
  <TR zebra={i % 2 === 1}>
    <TD width={40}><ColorSwatch hex={hex} /></TD>
    <TD><Token name={token} /></TD>
    <TD><Value>{hex.toUpperCase()}</Value></TD>
    {description !== undefined && <TD><span style={{ fontFamily: font, fontSize: 12, color: '#767676' }}>{description}</span></TD>}
  </TR>
)

/* ── Stories ─────────────────────────────────────────────────────────────── */

export const Primitives: StoryObj = {
  name: 'Primitives',
  render: () => (
    <Page>
      <PageHeader
        title="Color Primitives"
        description="Raw color values that form the foundation of the system. These are not used directly in components — semantic tokens reference these to create meaningful, purpose-driven color values."
      />

      <Section title="Neutral" description="Greyscale ramp from pure black to near-white (#FFFFFC — Cashmere's intentional off-white).">
        <Ramp name="neutral" shades={[
          { label: '0',    hex: '#000000' }, { label: '50',   hex: '#1B1B1B' }, { label: '100',  hex: '#323232' },
          { label: '200',  hex: '#494949' }, { label: '300',  hex: '#5F5F5F' }, { label: '400',  hex: '#767676' },
          { label: '500',  hex: '#8D8D8D' }, { label: '600',  hex: '#A4A4A4' }, { label: '700',  hex: '#BBBBBB' },
          { label: '800',  hex: '#D1D1D1' }, { label: '900',  hex: '#E8E8E8' }, { label: '950',  hex: '#F2F2F2' },
          { label: '1000', hex: '#FFFFFC' },
        ]} />
      </Section>

      <Section title="Accent" description="Cashfree brand blue. Used for CTAs, links, interactive elements, and focus rings.">
        <Ramp name="accent" shades={[
          { label: '50',  hex: '#E5EDFF' }, { label: '100', hex: '#CCDAFF' }, { label: '200', hex: '#9EB9FF' },
          { label: '300', hex: '#6B95FF' }, { label: '400', hex: '#3870FF' }, { label: '500', hex: '#094EFF' },
          { label: '600', hex: '#003BD1' }, { label: '700', hex: '#002C9E' }, { label: '800', hex: '#001E6B' },
          { label: '900', hex: '#000E33' }, { label: '950', hex: '#00071A' },
        ]} />
      </Section>

      <Section title="Positive" description="Success green. Used for confirmations, completed states, and positive trends.">
        <Ramp name="positive" shades={[
          { label: '50',  hex: '#DCFFE9' }, { label: '100', hex: '#89F2AF' }, { label: '200', hex: '#6ADC96' },
          { label: '300', hex: '#4AC77F' }, { label: '400', hex: '#04AB61' }, { label: '500', hex: '#009B54' },
          { label: '600', hex: '#008641' }, { label: '700', hex: '#007030' }, { label: '800', hex: '#005B21' },
          { label: '900', hex: '#004614' }, { label: '950', hex: '#00280B' },
        ]} />
      </Section>

      <Section title="Negative" description="Error red. Used for failures, destructive actions, and form validation errors.">
        <Ramp name="negative" shades={[
          { label: '50',  hex: '#FFE0E0' }, { label: '100', hex: '#FFBDBD' }, { label: '200', hex: '#FF7A7A' },
          { label: '300', hex: '#FF3D3D' }, { label: '400', hex: '#FA0000' }, { label: '500', hex: '#B80000' },
          { label: '600', hex: '#940000' }, { label: '700', hex: '#700000' }, { label: '800', hex: '#470000' },
          { label: '900', hex: '#240000' }, { label: '950', hex: '#140000' },
        ]} />
      </Section>

      <Section title="Warning" description="Amber. Used for caution states, non-critical alerts, and pending statuses.">
        <Ramp name="warning" shades={[
          { label: '50',  hex: '#FFF7E6' }, { label: '100', hex: '#FEF0D2' }, { label: '200', hex: '#FDDFA0' },
          { label: '300', hex: '#FDCF73' }, { label: '400', hex: '#FCC045' }, { label: '500', hex: '#FBB016' },
          { label: '600', hex: '#D89204' }, { label: '700', hex: '#A06D03' }, { label: '800', hex: '#694702' },
          { label: '900', hex: '#372501' }, { label: '950', hex: '#191100' },
        ]} />
      </Section>

      <Section title="Info" description="Shares the accent blue palette. Used for informational messages and neutral notices.">
        <Ramp name="info" shades={[
          { label: '50',  hex: '#E5EDFF' }, { label: '100', hex: '#CCDAFF' }, { label: '200', hex: '#9EB9FF' },
          { label: '300', hex: '#6B95FF' }, { label: '400', hex: '#3870FF' }, { label: '500', hex: '#094EFF' },
          { label: '600', hex: '#003BD1' }, { label: '700', hex: '#002C9E' }, { label: '800', hex: '#001E6B' },
          { label: '900', hex: '#000E33' }, { label: '950', hex: '#00071A' },
        ]} />
      </Section>

      <Section title="Overlays" description="Base #151515 at increasing opacity steps, used for scrim layers and elevated surfaces.">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[10,20,30,40,50,60,70,80,90,100].map((pct, i) => (
            <div key={pct} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)',
                backgroundImage: 'linear-gradient(45deg,#ccc 25%,transparent 25%),linear-gradient(-45deg,#ccc 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#ccc 75%),linear-gradient(-45deg,transparent 75%,#ccc 75%)',
                backgroundSize: '8px 8px', backgroundPosition: '0 0,0 4px,4px -4px,-4px 0',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: `rgba(21,21,21,${pct/100})` }} />
              </div>
              <span style={{ fontFamily: mono, fontSize: 10, color: '#494949', fontWeight: 600 }}>{i+1}00</span>
              <span style={{ fontFamily: font, fontSize: 10, color: '#767676' }}>{pct}%</span>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  ),
}

export const Semantics: StoryObj = {
  name: 'Semantics',
  render: () => (
    <Page>
      <PageHeader
        title="Semantic Color Tokens"
        description="Purpose-driven tokens that map primitives to UI roles. Always use semantic tokens in components — never reference primitives directly. This ensures consistency and makes theming possible."
      />

      <Section title="Neutral — Text" description="Text colors for content hierarchy.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-text-primary',   hex: '#1B1B1B' },
            { token: '--sds-neutral-text-secondary',  hex: '#494949' },
            { token: '--sds-neutral-text-muted',      hex: '#767676' },
            { token: '--sds-neutral-text-disabled',   hex: '#8D8D8D' },
            { token: '--sds-neutral-text-inverse',    hex: '#FFFFFC' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Neutral — Icon" description="Icon fill/stroke colors mirroring the text hierarchy.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-icon-primary',   hex: '#1B1B1B' },
            { token: '--sds-neutral-icon-secondary',  hex: '#494949' },
            { token: '--sds-neutral-icon-muted',      hex: '#767676' },
            { token: '--sds-neutral-icon-disabled',   hex: '#8D8D8D' },
            { token: '--sds-neutral-icon-inverse',    hex: '#FFFFFC' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Neutral — Background (Default)" description="Surface colors for default (light) backgrounds.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-bg-default-white',    hex: '#FFFFFC' },
            { token: '--sds-neutral-bg-default-subtle',   hex: '#F2F2F2' },
            { token: '--sds-neutral-bg-default-hover',    hex: '#F2F2F2' },
            { token: '--sds-neutral-bg-default-muted',    hex: '#D1D1D1' },
            { token: '--sds-neutral-bg-default-active',   hex: '#D1D1D1' },
            { token: '--sds-neutral-bg-default-pressed',  hex: '#BBBBBB' },
            { token: '--sds-neutral-bg-default-disabled', hex: '#E8E8E8' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Neutral — Background (Inverse)" description="Dark surface colors for inverse/dark-mode contexts.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-bg-inverse-inverse',  hex: '#1B1B1B' },
            { token: '--sds-neutral-bg-inverse-hover',    hex: '#494949' },
            { token: '--sds-neutral-bg-inverse-active',   hex: '#5F5F5F' },
            { token: '--sds-neutral-bg-inverse-pressed',  hex: '#000000' },
            { token: '--sds-neutral-bg-inverse-disabled', hex: '#323232' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Neutral — Background (Inverse Subtle)" description="Slightly lighter inverse surfaces for layered dark UI.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-bg-inversesubtle-subtle',   hex: '#494949' },
            { token: '--sds-neutral-bg-inversesubtle-hover',    hex: '#5F5F5F' },
            { token: '--sds-neutral-bg-inversesubtle-active',   hex: '#767676' },
            { token: '--sds-neutral-bg-inversesubtle-pressed',  hex: '#1B1B1B' },
            { token: '--sds-neutral-bg-inversesubtle-disabled', hex: '#323232' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Neutral — Border" description="Border and outline colors for containers, inputs, and dividers.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-border-default',  hex: '#1B1B1B' },
            { token: '--sds-neutral-border-strong',   hex: '#5F5F5F' },
            { token: '--sds-neutral-border-subtle',   hex: '#A4A4A4' },
            { token: '--sds-neutral-border-muted',    hex: '#BBBBBB' },
            { token: '--sds-neutral-border-medium',   hex: '#D1D1D1' },
            { token: '--sds-neutral-border-light',    hex: '#E8E8E8' },
            { token: '--sds-neutral-border-disabled', hex: '#D1D1D1' },
            { token: '--sds-neutral-border-inverse',  hex: '#FFFFFC' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Neutral — Divider" description="Horizontal/vertical rule colors.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-neutral-divider-default', hex: '#5F5F5F' },
            { token: '--sds-neutral-divider-subtle',  hex: '#A4A4A4' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Accent" description="Brand blue tokens for interactive and highlighted elements.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-accent-text-default',      hex: '#094EFF' },
            { token: '--sds-accent-text-subtle',       hex: '#FFFFFC' },
            { token: '--sds-accent-icon-default',      hex: '#094EFF' },
            { token: '--sds-accent-icon-subtle',       hex: '#FFFFFC' },
            { token: '--sds-accent-icon-disabled',     hex: '#E8E8E8' },
            { token: '--sds-accent-bg-default',        hex: '#094EFF' },
            { token: '--sds-accent-bg-hover',          hex: '#3870FF' },
            { token: '--sds-accent-bg-pressed',        hex: '#003BD1' },
            { token: '--sds-accent-bg-disabled',       hex: '#E8E8E8' },
            { token: '--sds-accent-bg-subtle',         hex: '#E5EDFF' },
            { token: '--sds-accent-bg-subtlehover',    hex: '#E5EDFF' },
            { token: '--sds-accent-bg-subtlepressed',  hex: '#CCDAFF' },
            { token: '--sds-accent-border-default',    hex: '#003BD1' },
            { token: '--sds-accent-border-subtle',     hex: '#094EFF' },
            { token: '--sds-accent-border-strong',     hex: '#002C9E' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Positive" description="Success and confirmation colors.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-positive-text-default',      hex: '#007030' },
            { token: '--sds-positive-text-subtle',       hex: '#FFFFFC' },
            { token: '--sds-positive-icon-default',      hex: '#009B54' },
            { token: '--sds-positive-icon-subtle',       hex: '#FFFFFC' },
            { token: '--sds-positive-icon-disabled',     hex: '#E8E8E8' },
            { token: '--sds-positive-bg-default',        hex: '#009B54' },
            { token: '--sds-positive-bg-hover',          hex: '#04AB61' },
            { token: '--sds-positive-bg-active',         hex: '#008641' },
            { token: '--sds-positive-bg-pressed',        hex: '#008641' },
            { token: '--sds-positive-bg-disabled',       hex: '#E8E8E8' },
            { token: '--sds-positive-bg-subtle',         hex: '#DCFFE9' },
            { token: '--sds-positive-bg-subtlehover',    hex: '#DCFFE9' },
            { token: '--sds-positive-bg-subtlepressed',  hex: '#89F2AF' },
            { token: '--sds-positive-border-default',    hex: '#008641' },
            { token: '--sds-positive-border-subtle',     hex: '#DCFFE9' },
            { token: '--sds-positive-border-strong',     hex: '#007030' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Negative" description="Error and destructive action colors.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-negative-text-default',      hex: '#B80000' },
            { token: '--sds-negative-icon-default',      hex: '#B80000' },
            { token: '--sds-negative-bg-default',        hex: '#B80000' },
            { token: '--sds-negative-bg-hover',          hex: '#FA0000' },
            { token: '--sds-negative-bg-active',         hex: '#940000' },
            { token: '--sds-negative-bg-pressed',        hex: '#940000' },
            { token: '--sds-negative-bg-disabled',       hex: '#E8E8E8' },
            { token: '--sds-negative-bg-subtle',         hex: '#FFE0E0' },
            { token: '--sds-negative-bg-subtlehover',    hex: '#FFE0E0' },
            { token: '--sds-negative-bg-subtlepressed',  hex: '#FFBDBD' },
            { token: '--sds-negative-border-default',    hex: '#940000' },
            { token: '--sds-negative-border-subtle',     hex: '#B80000' },
            { token: '--sds-negative-border-strong',     hex: '#700000' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Warning" description="Caution and non-critical alert colors.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-warning-text-default',      hex: '#A06D03' },
            { token: '--sds-warning-icon-default',      hex: '#A06D03' },
            { token: '--sds-warning-bg-default',        hex: '#D89204' },
            { token: '--sds-warning-bg-hover',          hex: '#FBB016' },
            { token: '--sds-warning-bg-active',         hex: '#694702' },
            { token: '--sds-warning-bg-pressed',        hex: '#694702' },
            { token: '--sds-warning-bg-disabled',       hex: '#E8E8E8' },
            { token: '--sds-warning-bg-subtle',         hex: '#FFF7E6' },
            { token: '--sds-warning-bg-subtlehover',    hex: '#FFF7E6' },
            { token: '--sds-warning-bg-subtlepressed',  hex: '#FEF0D2' },
            { token: '--sds-warning-border-default',    hex: '#D89204' },
            { token: '--sds-warning-border-subtle',     hex: '#A06D03' },
            { token: '--sds-warning-border-strong',     hex: '#694702' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Info" description="Informational and neutral-notice colors.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-info-text-default',   hex: '#094EFF' },
            { token: '--sds-info-icon-default',   hex: '#094EFF' },
            { token: '--sds-info-bg-default',     hex: '#094EFF' },
            { token: '--sds-info-bg-subtle',      hex: '#E5EDFF' },
            { token: '--sds-info-border-default', hex: '#003BD1' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Focus" description="Keyboard focus ring colors for accessibility.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-focus-infocus-default', hex: '#094EFF' },
            { token: '--sds-focus-infocus-subtle',  hex: '#E8E8E8' },
            { token: '--sds-focus-infocus-inverse', hex: '#5F5F5F' },
            { token: '--sds-focus-infocus-error',   hex: '#B80000' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Overlay" description="Scrim layers for modals, drawers, and elevated surfaces.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-overlay-bg-default',  hex: 'rgba(21,21,21,0.5)' },
            { token: '--sds-overlay-bg-elevated', hex: 'rgba(21,21,21,0.1)' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>

      <Section title="Data Visualization" description="Colors reserved for charts, graphs, and data display.">
        <Table headers={['', 'Token', 'Value']}>
          {[
            { token: '--sds-data-primary',   hex: '#1B1B1B' },
            { token: '--sds-data-secondary', hex: '#494949' },
            { token: '--sds-data-positive',  hex: '#008641' },
            { token: '--sds-data-negative',  hex: '#940000' },
            { token: '--sds-data-warning',   hex: '#D89204' },
            { token: '--sds-data-neutral',   hex: '#1B1B1B' },
            { token: '--sds-data-inverse',   hex: '#FFFFFC' },
          ].map((r, i) => <ColorRow key={r.token} {...r} i={i} />)}
        </Table>
      </Section>
    </Page>
  ),
}
