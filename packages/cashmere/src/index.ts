/**
 * @cashfree/cashmere
 * Cashmere Design System — React Components
 *
 * Consumer setup:
 *   1. Import tokens CSS once at your app root:
 *      import '@cashfree/cashmere-tokens/css'
 *   2. Import component styles:
 *      import '@cashfree/cashmere/styles'
 *   3. Use components:
 *      import { Button, Checkbox } from '@cashfree/cashmere'
 *
 * Font: Ensure DM Sans is loaded in your app's HTML or global CSS:
 *   <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

export {
  IconHome,
  IconBargraph,
  IconBookOpenText,
  IconMoney,
  IconDocument,
  IconWaiting,
  IconCode,
  IconSettings,
  IconChevronDown,
  IconChevronUp,
  IconChevronDown24,
  IconChevronUp24,
} from './icons'

export { Switch } from './components/Switch'
export type { SwitchProps } from './components/Switch'

export { NavigationDrawer } from './components/NavigationDrawer'
export type {
  NavigationDrawerProps,
  NavItem,
  NavSection,
  ProductVertical,
} from './components/NavigationDrawer'
