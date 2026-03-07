import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Page, PageHeader, Section, Table, TR, TD, Token, Value, font, mono } from './_docs'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
}
export default meta

const SAMPLE = 'The quick brown fox jumps over the lazy dog'
const SHORT  = 'The quick brown fox'

export const Typography: StoryObj = {
  name: 'Typography',
  render: () => (
    <Page>
      <PageHeader
        title="Typography"
        description="Cashmere uses DM Sans exclusively. All typographic values are driven by --sds-* tokens — never use hardcoded font sizes, weights, or families in components."
      />

      {/* Font Family */}
      <Section title="Font Family" description="Single typeface across the entire design system.">
        <Table headers={['Token', 'Value', 'Preview']}>
          <TR>
            <TD width={260}><Token name="--sds-family-web-font" /></TD>
            <TD width={220}><Value>"DM Sans", sans-serif</Value></TD>
            <TD><span style={{ fontFamily: 'var(--sds-family-web-font)', fontSize: 16, color: '#1b1b1b' }}>DM Sans — Aa Bb Cc 0123</span></TD>
          </TR>
        </Table>
      </Section>

      {/* Font Weight */}
      <Section title="Font Weight" description="Four weights available. Reference via token — do not use numeric values directly.">
        <Table headers={['Token', 'Value', 'Preview']}>
          {[
            { token: '--sds-weight-regular',  value: '400', label: 'Regular' },
            { token: '--sds-weight-medium',   value: '500', label: 'Medium' },
            { token: '--sds-weight-semibold', value: '600', label: 'Semibold' },
            { token: '--sds-weight-bold',     value: '700', label: 'Bold' },
          ].map(({ token, value, label }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={260}><Token name={token} /></TD>
              <TD width={80}><Value>{value}</Value></TD>
              <TD>
                <span style={{ fontFamily: 'var(--sds-family-web-font)', fontSize: 15, fontWeight: `var(${token})` as any, color: '#1b1b1b' }}>
                  {label} — {SHORT}
                </span>
              </TD>
            </TR>
          ))}
        </Table>
      </Section>

      {/* Font Size */}
      <Section title="Font Size" description="Type scale from 10px to 56px. Each token maps to a specific px value.">
        <Table headers={['Token', 'Value', 'Preview']}>
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
          ].map(({ token, value }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={200}><Token name={token} /></TD>
              <TD width={80}><Value>{value}</Value></TD>
              <TD>
                <span style={{ fontFamily: 'var(--sds-family-web-font)', fontSize: `var(${token})`, fontWeight: 'var(--sds-weight-medium)' as any, color: '#1b1b1b', lineHeight: 1.3, display: 'block' }}>
                  {SHORT}
                </span>
              </TD>
            </TR>
          ))}
        </Table>
      </Section>

      {/* Line Height */}
      <Section title="Line Height" description="Line heights are defined per text style rather than as standalone tokens. Values below map to each heading and body level.">
        <Table headers={['Style', 'Size token', 'Line height', 'Preview']}>
          {[
            { label: 'H1',        sizeT: '--sds-size-48', lh: 1.1  },
            { label: 'H2',        sizeT: '--sds-size-40', lh: 1.2  },
            { label: 'H3',        sizeT: '--sds-size-32', lh: 1.25 },
            { label: 'H4',        sizeT: '--sds-size-28', lh: 1.3  },
            { label: 'H5',        sizeT: '--sds-size-24', lh: 1.33 },
            { label: 'H6',        sizeT: '--sds-size-20', lh: 1.4  },
            { label: 'H7 / Body L', sizeT: '--sds-size-16', lh: 1.5  },
            { label: 'Body S',    sizeT: '--sds-size-14', lh: 1.43 },
            { label: 'Body XS / Overline', sizeT: '--sds-size-12', lh: 1.5 },
          ].map(({ label, sizeT, lh }, i) => (
            <TR key={label} zebra={i % 2 === 1}>
              <TD width={160}><span style={{ fontFamily: font, fontSize: 13, fontWeight: 600, color: '#1b1b1b' }}>{label}</span></TD>
              <TD width={180}><Token name={sizeT} /></TD>
              <TD width={100}><Value>{lh}</Value></TD>
              <TD>
                <span style={{ fontFamily: 'var(--sds-family-web-font)', fontSize: `var(${sizeT})`, fontWeight: 'var(--sds-weight-medium)' as any, lineHeight: lh, color: '#1b1b1b', display: 'block' }}>
                  {SHORT}
                </span>
              </TD>
            </TR>
          ))}
        </Table>
      </Section>

      {/* Named Text Styles */}
      <Section title="Text Styles" description="Named combinations of size + weight + line-height. Use the CSS class on any element, or replicate the token combination in a component.">
        <Table headers={['CSS class', 'Size', 'Weight', 'Line ht', 'Preview']}>
          {[
            { cls: 'sds-typography-h1-semibold',           sT: '--sds-size-48', wT: '--sds-weight-semibold', lh: 1.1  },
            { cls: 'sds-typography-h2-semibold',           sT: '--sds-size-40', wT: '--sds-weight-semibold', lh: 1.2  },
            { cls: 'sds-typography-h3-semibold',           sT: '--sds-size-32', wT: '--sds-weight-semibold', lh: 1.25 },
            { cls: 'sds-typography-h4-semibold',           sT: '--sds-size-28', wT: '--sds-weight-semibold', lh: 1.3  },
            { cls: 'sds-typography-h5-semibold',           sT: '--sds-size-24', wT: '--sds-weight-semibold', lh: 1.33 },
            { cls: 'sds-typography-h6-bold',               sT: '--sds-size-20', wT: '--sds-weight-bold',     lh: 1.4  },
            { cls: 'sds-typography-h7-bold',               sT: '--sds-size-16', wT: '--sds-weight-bold',     lh: 1.5  },
            { cls: 'sds-typography-bodylarge-medium',      sT: '--sds-size-16', wT: '--sds-weight-medium',   lh: 1.5  },
            { cls: 'sds-typography-bodylarge-semibold',    sT: '--sds-size-16', wT: '--sds-weight-semibold', lh: 1.5  },
            { cls: 'sds-typography-bodylarge-bold',        sT: '--sds-size-16', wT: '--sds-weight-bold',     lh: 1.5  },
            { cls: 'sds-typography-bodysmall-medium',      sT: '--sds-size-14', wT: '--sds-weight-medium',   lh: 1.43 },
            { cls: 'sds-typography-bodysmall-semibold',    sT: '--sds-size-14', wT: '--sds-weight-semibold', lh: 1.43 },
            { cls: 'sds-typography-bodysmall-bold',        sT: '--sds-size-14', wT: '--sds-weight-bold',     lh: 1.43 },
            { cls: 'sds-typography-bodyextrasmall-medium', sT: '--sds-size-12', wT: '--sds-weight-medium',   lh: 1.5  },
            { cls: 'sds-typography-bodyextrasmall-bold',   sT: '--sds-size-12', wT: '--sds-weight-bold',     lh: 1.5  },
            { cls: 'sds-typography-overline-semibold',     sT: '--sds-size-12', wT: '--sds-weight-semibold', lh: 1.33, upper: true },
            { cls: 'sds-typography-overline-bold',         sT: '--sds-size-12', wT: '--sds-weight-bold',     lh: 1.33, upper: true },
          ].map(({ cls, sT, wT, lh, upper }, i) => (
            <TR key={cls} zebra={i % 2 === 1}>
              <TD><span style={{ fontFamily: mono, fontSize: 11, color: '#494949' }}>.{cls}</span></TD>
              <TD width={80}><Token name={sT} /></TD>
              <TD width={100}><Token name={wT} /></TD>
              <TD width={70}><Value>{lh}</Value></TD>
              <TD>
                <span style={{
                  fontFamily: 'var(--sds-family-web-font)',
                  fontSize: `var(${sT})`,
                  fontWeight: `var(${wT})` as any,
                  lineHeight: lh,
                  letterSpacing: upper ? '0.06em' : undefined,
                  textTransform: upper ? 'uppercase' : undefined,
                  color: '#1b1b1b',
                  display: 'block',
                }}>
                  {upper ? 'Section label' : SAMPLE}
                </span>
              </TD>
            </TR>
          ))}
        </Table>
      </Section>
    </Page>
  ),
}
