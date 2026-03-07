import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
}

export default meta

const font = 'DM Sans, sans-serif'

/* ── Helpers ─────────────────────────────────────────────────────────────── */

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

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: font, fontSize: 11, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4, marginTop: 32 }}>
    {children}
  </div>
)

const Divider = () => (
  <div style={{ height: 1, background: '#e8e8e8', margin: '0' }} />
)

interface TypeRowProps {
  sample: string
  name: string
  sizeToken: string
  weightToken: string
  fontToken: string
  lineHeight: number | string
  uppercase?: boolean
  className?: string
}

const TypeRow = ({ sample, name, sizeToken, weightToken, fontToken, lineHeight, uppercase }: TypeRowProps) => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '16px 20px', background: '#fff', borderRadius: 8 }}>
      {/* Sample text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: `var(${fontToken})`,
          fontSize: `var(${sizeToken})`,
          fontWeight: `var(${weightToken})` as any,
          lineHeight,
          color: '#1b1b1b',
          letterSpacing: uppercase ? '0.06em' : undefined,
          textTransform: uppercase ? 'uppercase' : undefined,
          display: 'block',
        }}>
          {sample}
        </span>
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', gap: 32, flexShrink: 0, alignItems: 'center' }}>
        <div style={{ textAlign: 'right', minWidth: 140 }}>
          <div style={{ fontFamily: font, fontSize: 12, fontWeight: 600, color: '#1b1b1b' }}>{name}</div>
        </div>
        <TokenPill token={fontToken} />
        <TokenPill token={sizeToken} />
        <TokenPill token={weightToken} />
        <div style={{ fontFamily: font, fontSize: 11, color: '#a4a4a4', minWidth: 60, textAlign: 'right' }}>
          lh {lineHeight}
        </div>
      </div>
    </div>
    <Divider />
  </>
)

const TokenPill = ({ token }: { token: string }) => (
  <div style={{
    fontFamily: font, fontSize: 10, fontWeight: 500,
    color: '#094eff', background: '#e5edff',
    padding: '2px 8px', borderRadius: 4,
    whiteSpace: 'nowrap',
  }}>
    {token}
  </div>
)

/* ── Weight Card ─────────────────────────────────────────────────────────── */

interface WeightCardProps {
  label: string
  weightToken: string
  weightValue: string
}

const WeightCard = ({ label, weightToken, weightValue }: WeightCardProps) => (
  <div style={{ flex: 1, background: '#fff', borderRadius: 10, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
    <span style={{
      fontFamily: `var(--sds-family-web-font)`,
      fontSize: 48,
      fontWeight: `var(${weightToken})` as any,
      color: '#1b1b1b',
      lineHeight: 1,
    }}>
      Aa
    </span>
    <div>
      <div style={{ fontFamily: font, fontSize: 13, fontWeight: 700, color: '#1b1b1b' }}>{label}</div>
      <div style={{ fontFamily: font, fontSize: 11, color: '#767676', marginTop: 2 }}>{weightValue}</div>
      <TokenPill token={weightToken} />
    </div>
    <div style={{ marginTop: 4 }}>
      <div style={{ fontFamily: `var(--sds-family-web-font)`, fontSize: 13, fontWeight: `var(${weightToken})` as any, color: '#494949', lineHeight: 1.5 }}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  </div>
)

/* ── Stories ─────────────────────────────────────────────────────────────── */

export const TypeScale: StoryObj = {
  name: 'Type Scale',
  render: () => (
    <Page>
      <PageTitle
        title="Type Scale"
        subtitle="All typographic styles use DM Sans and reference only design tokens — never hardcoded values."
      />

      {/* Token legend */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'center' }}>
        <span style={{ fontFamily: font, fontSize: 11, color: '#767676' }}>Tokens used per style:</span>
        <TokenPill token="--sds-family-web-font" />
        <TokenPill token="--sds-size-*" />
        <TokenPill token="--sds-weight-*" />
      </div>

      {/* Column header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '8px 20px', marginBottom: 4 }}>
        <div style={{ flex: 1, fontFamily: font, fontSize: 10, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sample</div>
        <div style={{ display: 'flex', gap: 32, flexShrink: 0 }}>
          <div style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 140, textAlign: 'right' }}>Style</div>
          <div style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 80 }}>Font</div>
          <div style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 80 }}>Size</div>
          <div style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 80 }}>Weight</div>
          <div style={{ fontFamily: font, fontSize: 10, fontWeight: 600, color: '#a4a4a4', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 60, textAlign: 'right' }}>Line Ht</div>
        </div>
      </div>

      <SectionLabel>Headings</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 10, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
        <TypeRow sample="H1 — The quick brown fox" name="H1 · Semibold" sizeToken="--sds-size-48" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.1} />
        <TypeRow sample="H2 — The quick brown fox" name="H2 · Semibold" sizeToken="--sds-size-40" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.2} />
        <TypeRow sample="H3 — The quick brown fox" name="H3 · Semibold" sizeToken="--sds-size-32" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.25} />
        <TypeRow sample="H4 — The quick brown fox" name="H4 · Semibold" sizeToken="--sds-size-28" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.3} />
        <TypeRow sample="H5 — The quick brown fox" name="H5 · Semibold" sizeToken="--sds-size-24" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.33} />
        <TypeRow sample="H6 — The quick brown fox jumps" name="H6 · Bold" sizeToken="--sds-size-20" weightToken="--sds-weight-bold" fontToken="--sds-family-web-font" lineHeight={1.4} />
        <TypeRow sample="H7 — The quick brown fox jumps over" name="H7 · Bold" sizeToken="--sds-size-16" weightToken="--sds-weight-bold" fontToken="--sds-family-web-font" lineHeight={1.5} />
      </div>

      <SectionLabel>Body</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 10, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
        <TypeRow sample="Body Large — The quick brown fox jumps over the lazy dog" name="Body Large · Medium" sizeToken="--sds-size-16" weightToken="--sds-weight-medium" fontToken="--sds-family-web-font" lineHeight={1.5} />
        <TypeRow sample="Body Large — The quick brown fox jumps over the lazy dog" name="Body Large · Semibold" sizeToken="--sds-size-16" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.5} />
        <TypeRow sample="Body Large — The quick brown fox jumps over the lazy dog" name="Body Large · Bold" sizeToken="--sds-size-16" weightToken="--sds-weight-bold" fontToken="--sds-family-web-font" lineHeight={1.5} />
        <TypeRow sample="Body Small — The quick brown fox jumps over the lazy dog" name="Body Small · Medium" sizeToken="--sds-size-14" weightToken="--sds-weight-medium" fontToken="--sds-family-web-font" lineHeight={1.43} />
        <TypeRow sample="Body Small — The quick brown fox jumps over the lazy dog" name="Body Small · Semibold" sizeToken="--sds-size-14" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.43} />
        <TypeRow sample="Body Small — The quick brown fox jumps over the lazy dog" name="Body Small · Bold" sizeToken="--sds-size-14" weightToken="--sds-weight-bold" fontToken="--sds-family-web-font" lineHeight={1.43} />
        <TypeRow sample="Body XS — The quick brown fox jumps over the lazy dog" name="Body XS · Medium" sizeToken="--sds-size-12" weightToken="--sds-weight-medium" fontToken="--sds-family-web-font" lineHeight={1.5} />
        <TypeRow sample="Body XS — The quick brown fox jumps over the lazy dog" name="Body XS · Semibold" sizeToken="--sds-size-12" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.5} />
        <TypeRow sample="Body XS — The quick brown fox jumps over the lazy dog" name="Body XS · Bold" sizeToken="--sds-size-12" weightToken="--sds-weight-bold" fontToken="--sds-family-web-font" lineHeight={1.5} />
      </div>

      <SectionLabel>Overline</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 10, overflow: 'hidden', border: '1px solid #e8e8e8' }}>
        <TypeRow sample="Section Label" name="Overline · Semibold" sizeToken="--sds-size-12" weightToken="--sds-weight-semibold" fontToken="--sds-family-web-font" lineHeight={1.33} uppercase />
        <TypeRow sample="Section Label" name="Overline · Bold" sizeToken="--sds-size-12" weightToken="--sds-weight-bold" fontToken="--sds-family-web-font" lineHeight={1.33} uppercase />
      </div>
    </Page>
  ),
}

export const FontWeights: StoryObj = {
  name: 'Font Weights',
  render: () => (
    <Page>
      <PageTitle
        title="Font Weights"
        subtitle="Four weights available. All reference the --sds-weight-* token."
      />
      <div style={{ display: 'flex', gap: 16 }}>
        <WeightCard label="Regular" weightToken="--sds-weight-regular" weightValue="400" />
        <WeightCard label="Medium" weightToken="--sds-weight-medium" weightValue="500" />
        <WeightCard label="Semibold" weightToken="--sds-weight-semibold" weightValue="600" />
        <WeightCard label="Bold" weightToken="--sds-weight-bold" weightValue="700" />
      </div>

      <div style={{ marginTop: 32 }}>
        <SectionLabel>Font Family</SectionLabel>
        <div style={{ background: '#fff', borderRadius: 10, padding: '24px 20px', display: 'flex', alignItems: 'center', gap: 32 }}>
          <span style={{ fontFamily: 'var(--sds-family-web-font)', fontSize: 40, fontWeight: 600, color: '#1b1b1b', letterSpacing: '-0.01em' }}>
            DM Sans
          </span>
          <div>
            <div style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: '#1b1b1b', marginBottom: 4 }}>DM Sans</div>
            <div style={{ fontFamily: font, fontSize: 11, color: '#767676', marginBottom: 8 }}>Google Fonts · weights 400, 500, 600, 700</div>
            <TokenPill token="--sds-family-web-font" />
          </div>
        </div>
      </div>
    </Page>
  ),
}
