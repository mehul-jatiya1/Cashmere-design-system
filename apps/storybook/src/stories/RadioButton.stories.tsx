import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from '@storybook/test'
import { Radio, RadioGroup } from '@cashfree/cashmere'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioButton',
  component: RadioGroup,
  // No tags: ['autodocs'] — docs handled by RadioButton.docs.mdx
  parameters: {
    docs: {
      description: {
        component:
          'RadioButton is a compound component (`<RadioGroup>` + `<Radio>`) for single-selection form controls. Use when the user must pick exactly one option from 2–5 mutually exclusive choices that should all be visible at once.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/OEwHAfVtHhfYFGKEalynMP/Cashmere-Design-System?node-id=8280-16532',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Visible label for the entire radio group.',
      table: { defaultValue: { summary: '—' } },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of all radio indicators in the group. Affects circle diameter, dot size, and label font size.',
      table: { defaultValue: { summary: 'medium' } },
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction of the radio options.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    labelPosition: {
      control: 'radio',
      options: ['top', 'left'],
      description: 'Position of the group label relative to the options.',
      table: { defaultValue: { summary: 'top' } },
    },
    validationState: {
      control: 'radio',
      options: ['none', 'error'],
      description: "When 'error', renders errorText with destructive styling.",
      table: { defaultValue: { summary: 'none' } },
    },
    necessityIndicator: {
      control: 'radio',
      options: ['none', 'required', 'optional'],
      description: 'Visual necessity indicator shown after the group label.',
      table: { defaultValue: { summary: 'none' } },
    },
    helpText: {
      control: 'text',
      description: 'Assistive text shown below the group. Hidden when validationState is error.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    errorText: {
      control: 'text',
      description: 'Error message shown when validationState is error.',
      table: { defaultValue: { summary: 'undefined' } },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disables all radio options in the group.',
      table: { defaultValue: { summary: 'false' } },
    },
    isRequired: {
      control: 'boolean',
      description: 'Marks the group as required for form validation (sets aria-required).',
      table: { defaultValue: { summary: 'false' } },
    },
    value: {
      control: false,
      description: 'Controlled selected value. Use with onChange.',
    },
    defaultValue: {
      control: false,
      description: 'Initial selected value for uncontrolled usage.',
    },
    onChange: {
      control: false,
      description: 'Fires when selection changes — ({ name, value }) => void.',
    },
    name: {
      control: false,
      description: 'HTML name attribute for the radio inputs.',
    },
    children: {
      control: false,
      description: 'One or more <Radio> components.',
    },
    testID: {
      control: false,
      description: 'Test identifier for the group container.',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

/* ── Default ─────────────────────────────────────────────────────────────── */

export const Default: Story = {
  args: {
    label: 'Payment method',
    size: 'medium',
    orientation: 'vertical',
    labelPosition: 'top',
    validationState: 'none',
    necessityIndicator: 'none',
    isDisabled: false,
    isRequired: false,
  },
  render: (args) => (
    <RadioGroup {...args} defaultValue="upi">
      <Radio value="upi">UPI</Radio>
      <Radio value="card">Card</Radio>
      <Radio value="netbanking">Net banking</Radio>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default RadioGroup with a pre-selected value. Use the Controls panel to explore every prop combination.',
      },
    },
  },
}

/* ── All Sizes ───────────────────────────────────────────────────────────── */

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Small (12px), medium (16px), and large (20px) circle sizes. Use small in dense data tables, medium in standard forms, large in prominent onboarding flows.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
      <RadioGroup label="Small" size="small" defaultValue="upi">
        <Radio value="upi">UPI</Radio>
        <Radio value="card">Card</Radio>
        <Radio value="netbanking">Net banking</Radio>
      </RadioGroup>
      <RadioGroup label="Medium" size="medium" defaultValue="upi">
        <Radio value="upi">UPI</Radio>
        <Radio value="card">Card</Radio>
        <Radio value="netbanking">Net banking</Radio>
      </RadioGroup>
      <RadioGroup label="Large" size="large" defaultValue="upi">
        <Radio value="upi">UPI</Radio>
        <Radio value="card">Card</Radio>
        <Radio value="netbanking">Net banking</Radio>
      </RadioGroup>
    </div>
  ),
}

/* ── All States ──────────────────────────────────────────────────────────── */

export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Default, disabled (group-level), disabled (single item), error validation, and required necessity indicator — side by side.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <RadioGroup label="Default" defaultValue="t1">
        <Radio value="t0">Same day (T+0)</Radio>
        <Radio value="t1">Next day (T+1)</Radio>
        <Radio value="t2">2 days (T+2)</Radio>
      </RadioGroup>

      <RadioGroup label="All disabled" defaultValue="t1" isDisabled>
        <Radio value="t0">Same day (T+0)</Radio>
        <Radio value="t1">Next day (T+1)</Radio>
        <Radio value="t2">2 days (T+2)</Radio>
      </RadioGroup>

      <RadioGroup label="Partial disabled" defaultValue="t1">
        <Radio value="t0" helpText="Premium accounts only" isDisabled>
          Same day (T+0)
        </Radio>
        <Radio value="t1">Next day (T+1)</Radio>
        <Radio value="t2">2 days (T+2)</Radio>
      </RadioGroup>

      <RadioGroup
        label="Error state"
        validationState="error"
        errorText="Please select a settlement cycle."
      >
        <Radio value="t0">Same day (T+0)</Radio>
        <Radio value="t1">Next day (T+1)</Radio>
        <Radio value="t2">2 days (T+2)</Radio>
      </RadioGroup>

      <RadioGroup
        label="Required"
        necessityIndicator="required"
        isRequired
        defaultValue="savings"
      >
        <Radio value="savings">Savings</Radio>
        <Radio value="current">Current</Radio>
      </RadioGroup>
    </div>
  ),
}

/* ── Orientations ────────────────────────────────────────────────────────── */

export const Orientations: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Vertical (default) stacks options for readability; horizontal suits short 1–2 word labels in space-constrained layouts like filter rows.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <RadioGroup label="Vertical (default)" orientation="vertical" defaultValue="upi">
        <Radio value="upi">UPI</Radio>
        <Radio value="card">Card</Radio>
        <Radio value="netbanking">Net banking</Radio>
      </RadioGroup>

      <RadioGroup label="Horizontal" orientation="horizontal" defaultValue="upi">
        <Radio value="upi">UPI</Radio>
        <Radio value="card">Card</Radio>
        <Radio value="netbanking">Net banking</Radio>
      </RadioGroup>
    </div>
  ),
}

/* ── With Help Text ──────────────────────────────────────────────────────── */

export const WithHelpText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Help text at the group level appears below all options. Per-radio help text appears below that individual option.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start' }}>
      <RadioGroup
        label="Settlement cycle"
        helpText="Funds will be settled based on your selection."
        defaultValue="t1"
      >
        <Radio value="t0">Same day (T+0)</Radio>
        <Radio value="t1">Next day (T+1)</Radio>
        <Radio value="t2">2 days (T+2)</Radio>
      </RadioGroup>

      <RadioGroup label="Settlement cycle" defaultValue="t1">
        <Radio value="t0" helpText="Available for premium accounts">
          Same day (T+0)
        </Radio>
        <Radio value="t1">Next day (T+1)</Radio>
        <Radio value="t2">2 days (T+2)</Radio>
      </RadioGroup>
    </div>
  ),
}

/* ── Controlled ──────────────────────────────────────────────────────────── */

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Controlled pattern — manage selected value externally with value + onChange. The current value is shown below the group.',
      },
    },
  },
  render: () => {
    const [theme, setTheme] = useState('light')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <RadioGroup
          label="Theme preference"
          value={theme}
          onChange={({ value }) => setTheme(value)}
        >
          <Radio value="light">Light</Radio>
          <Radio value="dark">Dark</Radio>
          <Radio value="system">System</Radio>
        </RadioGroup>
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: 'var(--sds-neutral-text-muted, #888)',
            fontFamily: 'monospace',
          }}
        >
          Selected: <strong>{theme}</strong>
        </p>
      </div>
    )
  },
}

/* ── Interactive ─────────────────────────────────────────────────────────── */

export const Interactive: Story = {
  args: {
    label: 'Payment method',
    size: 'medium',
    orientation: 'vertical',
    validationState: 'none',
    isDisabled: false,
  },
  render: (args) => (
    <RadioGroup {...args} defaultValue="upi">
      <Radio value="upi">UPI</Radio>
      <Radio value="card">Card</Radio>
      <Radio value="netbanking">Net banking</Radio>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Automated interaction test — clicks "Card" and verifies it becomes the checked option.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const upiRadio = canvas.getByRole('radio', { name: 'UPI' })
    const cardRadio = canvas.getByRole('radio', { name: 'Card' })

    await expect(upiRadio).toBeChecked()
    await expect(cardRadio).not.toBeChecked()

    await userEvent.click(cardRadio)

    await expect(cardRadio).toBeChecked()
    await expect(upiRadio).not.toBeChecked()
  },
}

/* ── Mobile ──────────────────────────────────────────────────────────────── */

export const Mobile: Story = {
  args: {
    label: 'Payment method',
    size: 'medium',
  },
  render: (args) => (
    <RadioGroup {...args} defaultValue="upi">
      <Radio value="upi">UPI</Radio>
      <Radio value="card">Card</Radio>
      <Radio value="netbanking">Net banking</Radio>
    </RadioGroup>
  ),
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'How RadioButton renders on mobile (375px). Tap targets are expanded via the full-width label element to meet the ≥44px minimum.',
      },
    },
  },
}
