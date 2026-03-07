import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Page, PageHeader, Section, Table, TR, TD, Token, Value, font } from './_docs'

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
}
export default meta

const Bar = ({ px }: { px: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <div style={{ width: Math.max(px * 1.5, 2), height: 16, background: '#094eff', borderRadius: 3, flexShrink: 0, maxWidth: 320 }} />
  </div>
)

const RadiusBox = ({ px }: { px: number }) => (
  <div style={{ width: 40, height: 40, borderRadius: Math.min(px, 9999), border: '2px solid #094eff', background: '#e5edff' }} />
)

const StrokeBox = ({ px }: { px: number }) => (
  <div style={{ width: 80, height: 32, border: `${px}px solid #094eff`, borderRadius: 6, background: '#e5edff' }} />
)

const IconDot = ({ px }: { px: number }) => (
  <div style={{ width: px, height: px, borderRadius: '50%', background: '#094eff', flexShrink: 0 }} />
)

export const Spacing: StoryObj = {
  name: 'Spacing',
  render: () => (
    <Page>
      <PageHeader
        title="Spacing"
        description="Spacing tokens define padding, margin, and gap values across all components. Always use these tokens — never hardcode spacing values."
      />

      <Section title="Spacing Scale" description="Base-4 scale used for padding, margin, and gap. The visual bar shows the relative size of each step.">
        <Table headers={['Token', 'Value', 'Visual']}>
          {[
            { token: '--sds-spacing-0',   value: '0px',   px: 0   },
            { token: '--sds-spacing-2',   value: '2px',   px: 2   },
            { token: '--sds-spacing-4',   value: '4px',   px: 4   },
            { token: '--sds-spacing-8',   value: '8px',   px: 8   },
            { token: '--sds-spacing-10',  value: '10px',  px: 10  },
            { token: '--sds-spacing-12',  value: '12px',  px: 12  },
            { token: '--sds-spacing-16',  value: '16px',  px: 16  },
            { token: '--sds-spacing-20',  value: '20px',  px: 20  },
            { token: '--sds-spacing-24',  value: '24px',  px: 24  },
            { token: '--sds-spacing-32',  value: '32px',  px: 32  },
            { token: '--sds-spacing-40',  value: '40px',  px: 40  },
            { token: '--sds-spacing-48',  value: '48px',  px: 48  },
            { token: '--sds-spacing-64',  value: '64px',  px: 64  },
            { token: '--sds-spacing-96',  value: '96px',  px: 96  },
            { token: '--sds-spacing-160', value: '160px', px: 160 },
          ].map(({ token, value, px }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={220}><Token name={token} /></TD>
              <TD width={80}><Value>{value}</Value></TD>
              <TD><Bar px={px} /></TD>
            </TR>
          ))}
        </Table>
      </Section>

      <Section title="Negative Spacing" description="Used for overlapping elements and offset positioning.">
        <Table headers={['Token', 'Value']}>
          {[
            { token: '--sds-spacing-negative-4',  value: '-4px'  },
            { token: '--sds-spacing-negative-8',  value: '-8px'  },
            { token: '--sds-spacing-negative-12', value: '-12px' },
            { token: '--sds-spacing-negative-16', value: '-16px' },
            { token: '--sds-spacing-negative-24', value: '-24px' },
          ].map(({ token, value }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={280}><Token name={token} /></TD>
              <TD><Value>{value}</Value></TD>
            </TR>
          ))}
        </Table>
      </Section>

      <Section title="Border Radius" description="Corner radius scale. --sds-radius-full creates pill/circle shapes.">
        <Table headers={['Token', 'Value', 'Preview']}>
          {[
            { token: '--sds-radius-50',   value: '0px',    px: 0     },
            { token: '--sds-radius-100',  value: '2px',    px: 2     },
            { token: '--sds-radius-200',  value: '4px',    px: 4     },
            { token: '--sds-radius-300',  value: '8px',    px: 8     },
            { token: '--sds-radius-400',  value: '12px',   px: 12    },
            { token: '--sds-radius-500',  value: '14px',   px: 14    },
            { token: '--sds-radius-600',  value: '16px',   px: 16    },
            { token: '--sds-radius-700',  value: '18px',   px: 18    },
            { token: '--sds-radius-800',  value: '20px',   px: 20    },
            { token: '--sds-radius-900',  value: '24px',   px: 24    },
            { token: '--sds-radius-1000', value: '32px',   px: 32    },
            { token: '--sds-radius-full', value: '9999px', px: 9999  },
          ].map(({ token, value, px }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={220}><Token name={token} /></TD>
              <TD width={80}><Value>{value}</Value></TD>
              <TD><RadiusBox px={px} /></TD>
            </TR>
          ))}
        </Table>
      </Section>

      <Section title="Stroke Width" description="Border and focus ring widths.">
        <Table headers={['Token', 'Value', 'Preview']}>
          {[
            { token: '--sds-stroke-border',     value: '1px', px: 1 },
            { token: '--sds-stroke-focus',      value: '2px', px: 2 },
            { token: '--sds-stroke-focuslarge', value: '8px', px: 8 },
          ].map(({ token, value, px }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={260}><Token name={token} /></TD>
              <TD width={80}><Value>{value}</Value></TD>
              <TD><StrokeBox px={px} /></TD>
            </TR>
          ))}
        </Table>
      </Section>

      <Section title="Icon Sizes" description="Standardised icon size scale used across all icon components.">
        <Table headers={['Token', 'Value', 'Preview']}>
          {[
            { token: '--sds-icon-xs',  value: '12px', px: 12 },
            { token: '--sds-icon-xs2', value: '14px', px: 14 },
            { token: '--sds-icon-sm',  value: '16px', px: 16 },
            { token: '--sds-icon-md',  value: '18px', px: 18 },
            { token: '--sds-icon-lg',  value: '20px', px: 20 },
            { token: '--sds-icon-xl',  value: '24px', px: 24 },
            { token: '--sds-icon-2xl', value: '32px', px: 32 },
          ].map(({ token, value, px }, i) => (
            <TR key={token} zebra={i % 2 === 1}>
              <TD width={220}><Token name={token} /></TD>
              <TD width={80}><Value>{value}</Value></TD>
              <TD>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <IconDot px={px} />
                  <span style={{ fontFamily: font, fontSize: 12, color: '#767676' }}>{px}×{px}px</span>
                </div>
              </TD>
            </TR>
          ))}
        </Table>
      </Section>
    </Page>
  ),
}
