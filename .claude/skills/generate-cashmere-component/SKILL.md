---
description: Generates a new Cashmere design system component from a Figma URL. Creates the React component, CSS module, index export, Storybook stories, updates the main index.ts, and pushes everything to GitHub. Use when a designer shares a Figma link and wants to add a component to the Cashmere repo.
---

# Generate Cashmere Component

You are generating a production-ready React component for the **Cashmere design system** (`~/Documents/cashmere`) from a Figma design URL, then committing and pushing it to GitHub.

---

## Step 1 — Extract Figma URL

The user will provide a Figma URL like:
`https://www.figma.com/design/:fileKey/:name?node-id=:nodeId`

Extract:
- `fileKey` = the segment after `/design/`
- `nodeId` = the `node-id` query param, replace `-` with `:`

If no URL is provided, ask for one before proceeding.

---

## Step 2 — Read the Design

Call `get_design_context` with the `fileKey` and `nodeId`. Study:
- Component name (use the Figma frame name, PascalCase)
- All variants and states
- Colors → map to Cashmere CSS tokens (see token reference below)
- Typography → map to token variables
- Spacing, radius, border → map to tokens
- Icons used → check if they exist in `packages/cashmere/src/icons/`

Take a screenshot to visually verify the design.

### Cashmere Token Reference
```css
/* Colors — from packages/tokens/src/index.ts */
var(--color-primary)         /* Cashfree brand blue */
var(--color-surface)         /* White backgrounds */
var(--color-surface-raised)  /* Card/raised surfaces */
var(--color-border)          /* Default borders */
var(--color-text-primary)    /* #1b1b1b */
var(--color-text-secondary)  /* Muted text */
var(--color-positive)        /* Green */
var(--color-negative)        /* Red */
var(--color-warning)         /* Amber */
var(--color-information)     /* Blue */

/* Typography */
var(--font-family-base)      /* DM Sans */
var(--font-size-xs)  /* 11px */
var(--font-size-sm)  /* 12px */
var(--font-size-md)  /* 14px */
var(--font-size-lg)  /* 16px */
var(--font-size-xl)  /* 20px */
var(--font-weight-regular)   /* 400 */
var(--font-weight-medium)    /* 500 */
var(--font-weight-semibold)  /* 600 */

/* Spacing */
var(--space-1)  /* 4px */
var(--space-2)  /* 8px */
var(--space-3)  /* 12px */
var(--space-4)  /* 16px */
var(--space-5)  /* 20px */
var(--space-6)  /* 24px */

/* Border radius */
var(--radius-sm)   /* 4px */
var(--radius-md)   /* 8px */
var(--radius-lg)   /* 12px */
var(--radius-full) /* 9999px */
```

---

## Step 3 — Read Existing Components for Patterns

Before writing code, read one similar existing component to match the exact code style:

```
packages/cashmere/src/components/Tags/Tags.tsx
packages/cashmere/src/components/Tags/Tags.module.css
packages/cashmere/src/components/Tags/index.ts
apps/storybook/src/stories/Tags.stories.tsx
```

---

## Step 4 — Create the Component Files

Create the following files. The component name is `[ComponentName]` (PascalCase from Figma frame name).

### File 1: `packages/cashmere/src/components/[ComponentName]/[ComponentName].tsx`

```tsx
import React from 'react'
import styles from './[ComponentName].module.css'

export interface [ComponentName]Props {
  // props extracted from Figma variants
}

export const [ComponentName]: React.FC<[ComponentName]Props> = ({
  // destructure with defaults
}) => {
  // build className from styles + variant props
  return (
    // JSX matching the Figma design
  )
}
```

Rules:
- Use CSS modules (`styles.xxx`) only — no inline styles
- Use token CSS variables in the CSS file — never hardcode hex values
- Props must match Figma variant property names exactly
- Use semantic HTML (`<button>`, `<nav>`, `<span>`, etc.)
- Export the props interface

### File 2: `packages/cashmere/src/components/[ComponentName]/[ComponentName].module.css`

```css
/* [ComponentName] — Cashmere Design System */
.base {
  /* base styles using token variables */
}
/* variant modifiers */
```

Rules:
- All values must use CSS token variables — no raw hex, no px hardcoded unless no token exists
- Use `font-family: var(--font-family-base)` for all text
- Match Figma spacing exactly using token variables

### File 3: `packages/cashmere/src/components/[ComponentName]/index.ts`

```ts
export { [ComponentName] } from './[ComponentName]'
export type { [ComponentName]Props } from './[ComponentName]'
```

### File 4: `apps/storybook/src/stories/[ComponentName].stories.tsx`

```tsx
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { [ComponentName] } from '@cashfree/cashmere'

const meta: Meta<typeof [ComponentName]> = {
  title: 'Components/[ComponentName]',
  component: [ComponentName],
  tags: ['autodocs'],
  argTypes: {
    // one argType per variant prop with appropriate control type
  },
}

export default meta
type Story = StoryObj<typeof [ComponentName]>

export const Default: Story = {
  args: {
    // default args
  },
}

// Add one story per major variant group showing all options side by side
```

---

## Step 5 — Update Main Index Export

Edit `packages/cashmere/src/index.ts` and add the new export at the end (before the last line):

```ts
export { [ComponentName] } from './components/[ComponentName]'
export type { [ComponentName]Props } from './components/[ComponentName]'
```

---

## Step 6 — Verify

After creating all files, run in the project root:
```bash
cd ~/Documents/cashmere && pnpm build 2>&1 | tail -20
```

If there are TypeScript errors, fix them before proceeding. Common issues:
- Missing prop types → add to interface
- CSS module class not found → add the class to the CSS file
- Import error → check the index.ts export

---

## Step 7 — Commit and Push to GitHub

```bash
cd ~/Documents/cashmere
git add packages/cashmere/src/components/[ComponentName]/ \
        apps/storybook/src/stories/[ComponentName].stories.tsx \
        packages/cashmere/src/index.ts
git commit -m "feat([ComponentName]): add component from Figma design"
git push
```

If `git push` fails due to auth, use:
```bash
git push origin main
```

---

## Step 8 — Confirm to the User

Tell the user:
1. ✅ Component created at `packages/cashmere/src/components/[ComponentName]/`
2. ✅ Storybook story at `apps/storybook/src/stories/[ComponentName].stories.tsx`
3. ✅ Pushed to GitHub
4. 👉 View it live at **http://localhost:6006** → Components → [ComponentName]
5. 🌐 Will appear on the Netlify site in ~2 minutes after Netlify builds

---

## Error Handling

- **Build fails with type error** → fix the TypeScript before pushing
- **CSS token not found** → check `packages/tokens/src/index.ts` for the correct variable name
- **Git push fails** → check internet connection; try `git push origin main`
- **Figma access denied** → ask the user to make the Figma file publicly viewable (Share → Anyone with link → View)
