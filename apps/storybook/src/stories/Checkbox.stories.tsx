import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, within, userEvent } from '@storybook/test'
import { Checkbox } from '@cashfree/cashmere'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  // NO tags: ['autodocs'] — docs handled by Checkbox.docs.mdx
  parameters: {
    docs: {
      description: {
        component:
          'A form control that allows users to select one or more options from a set, supporting checked, unchecked, and indeterminate states.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/OEwHAfVtHhfYFGKEalynMP/Cashmere-Design-System?node-id=8277-34569&t=8ohgna1Sfb7mqqZH-4',
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    checked: {
      control: 'radio',
      options: [false, true, 'indeterminate'],
      description: 'Whether the checkbox is checked, unchecked, or in an indeterminate state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled and non-interactive.',
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the checkbox is read-only — shows current state but cannot be changed.',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Optional visible label text displayed next to the checkbox.',
      table: { defaultValue: { summary: '—' } },
    },
    id: {
      control: 'text',
      description: 'HTML id for the input — used to associate with an external label.',
      table: { defaultValue: { summary: '—' } },
    },
    name: {
      control: 'text',
      description: 'HTML name attribute for form submission.',
      table: { defaultValue: { summary: '—' } },
    },
    onChange: {
      control: false,
      description: 'Change handler — not called when readOnly or disabled.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name applied to the wrapper element.',
      table: { defaultValue: { summary: '—' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    checked: false,
    label: 'Accept terms and conditions',
    disabled: false,
    readOnly: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default Checkbox state. Use the Controls panel below to explore every prop combination.',
      },
    },
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'I agree to the terms',
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in the checked state — the filled blue box with a checkmark.',
      },
    },
  },
}

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
    label: 'Select all (partial)',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Indeterminate state — used when a parent checkbox represents a group where some (but not all) children are selected.',
      },
    },
  },
}

export const AllStates: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All checked states shown side by side: Unchecked, Checked, and Indeterminate.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox checked={false} label="Unchecked" />
      <Checkbox checked={true} label="Checked" />
      <Checkbox checked="indeterminate" label="Indeterminate" />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All disabled variants — unchecked, checked, and indeterminate. Rendered at 40% opacity and not interactive.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox checked={false} disabled label="Disabled unchecked" />
      <Checkbox checked={true} disabled label="Disabled checked" />
      <Checkbox checked="indeterminate" disabled label="Disabled indeterminate" />
    </div>
  ),
}

export const ReadOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Read-only checkboxes display the current state in grey but cannot be changed by the user.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox checked={false} readOnly label="Read-only unchecked" />
      <Checkbox checked={true} readOnly label="Read-only checked" />
      <Checkbox checked="indeterminate" readOnly label="Read-only indeterminate" />
    </div>
  ),
}

export const NoLabel: Story = {
  args: {
    checked: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox without a visible label — use the `id` prop to associate an external `<label>` for accessibility.',
      },
    },
  },
}

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>(false)

    const handleChange = () => {
      setChecked((prev) => !prev)
    }

    return (
      <Checkbox
        checked={checked}
        label={checked ? 'Checked — click to uncheck' : 'Unchecked — click to check'}
        onChange={handleChange}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Automated interaction test — verifies the checkbox responds correctly to user clicks.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')
    await expect(checkbox).toBeVisible()
    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).not.toBeChecked()
  },
}

export const Mobile: Story = {
  args: {
    checked: false,
    label: 'Accept terms and conditions',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'How the checkbox renders on mobile (375px). The 20×20px touch target meets the minimum 44×44px tap target when combined with label padding.',
      },
    },
  },
}
