/**
 * Cashmere Design System — Token Objects
 *
 * Two exports:
 *   `primitives` — raw values (hex, px numbers) for reference / tooling
 *   `vars`       — CSS variable references for use in JS/TS styled components
 *
 * Usage:
 *   import { vars } from '@cashfree/cashmere-tokens'
 *   style={{ color: vars.semantic.neutral.text.primary }}
 *   // → 'var(--sds-neutral-text-primary)'
 */

// ---------------------------------------------------------------------------
// Primitive raw values
// ---------------------------------------------------------------------------

export const primitives = {
  color: {
    accent: {
      50: '#e5edff', 100: '#ccdaff', 200: '#9eb9ff', 300: '#6b95ff',
      400: '#3870ff', 500: '#094eff', 600: '#003bd1', 700: '#002c9e',
      800: '#001e6b', 900: '#000e33', 950: '#00071a',
    },
    neutral: {
      0: '#000000', 50: '#1b1b1b', 100: '#323232', 200: '#494949',
      300: '#5f5f5f', 400: '#767676', 500: '#8d8d8d', 600: '#a4a4a4',
      700: '#bbbbbb', 800: '#d1d1d1', 900: '#e8e8e8', 950: '#f2f2f2',
      1000: '#fffffc',
    },
    brand: {
      0: '#000000', 50: '#1b1b1b', 100: '#323232', 200: '#494949',
      300: '#5f5f5f', 400: '#767676', 500: '#8d8d8d', 600: '#a4a4a4',
      700: '#bbbbbb', 800: '#d1d1d1', 900: '#e8e8e8', 950: '#f2f2f2',
      1000: '#fffffc',
    },
    negative: {
      50: '#ffe0e0', 100: '#ffbdbd', 200: '#ff7a7a', 300: '#ff3d3d',
      400: '#fa0000', 500: '#b80000', 600: '#940000', 700: '#700000',
      800: '#470000', 900: '#240000', 950: '#140000',
    },
    positive: {
      50: '#dcffe9', 100: '#89f2af', 200: '#6adc96', 300: '#4ac77f',
      400: '#04ab61', 500: '#009b54', 600: '#008641', 700: '#007030',
      800: '#005b21', 900: '#004614', 950: '#00280b',
    },
    warning: {
      50: '#fff7e6', 100: '#fef0d2', 200: '#fddfa0', 300: '#fdcf73',
      400: '#fcc045', 500: '#fbb016', 600: '#d89204', 700: '#a06d03',
      800: '#694702', 900: '#372501', 950: '#191100',
    },
    info: {
      50: '#e5edff', 100: '#ccdaff', 200: '#9eb9ff', 300: '#6b95ff',
      400: '#3870ff', 500: '#094eff', 600: '#003bd1', 700: '#002c9e',
      800: '#001e6b', 900: '#000e33', 950: '#00071a',
    },
    white: { 50: '#fffffc' },
    overlays: {
      100: '#1515151a', 200: '#15151533', 300: '#1515154d', 400: '#15151566',
      500: '#15151580', 600: '#15151599', 700: '#151515b2', 800: '#151515cc',
      900: '#151515e5', 950: '#151515',
    },
  },
  spacing: {
    0: 0, 2: 2, 4: 4, 8: 8, 10: 10, 12: 12, 16: 16, 20: 20,
    24: 24, 32: 32, 40: 40, 48: 48, 64: 64, 96: 96, 160: 160,
    'negative-4': -4, 'negative-8': -8, 'negative-12': -12,
    'negative-16': -16, 'negative-24': -24,
  },
  radius: {
    50: 0, 100: 2, 200: 4, 300: 8, 400: 12, 500: 14,
    600: 16, 700: 18, 800: 20, 900: 24, 1000: 32, full: 9999,
  },
  stroke: { border: 1, focus: 2, focuslarge: 8 },
  icon: { xs: 12, xs2: 14, sm: 16, md: 18, lg: 20, xl: 24, '2xl': 32 },
  typography: {
    family: { webFont: 'DM Sans' },
    size: { 10: 10, 11: 11, 12: 12, 14: 14, 16: 16, 18: 18, 20: 20, 24: 24, 28: 28, 32: 32, 40: 40, 48: 48, 56: 56 },
    weight: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  },
} as const

// ---------------------------------------------------------------------------
// CSS variable references — use these in JS/TS styles
// ---------------------------------------------------------------------------

export const vars = {
  // Primitive color vars
  color: {
    accent:   { 50: 'var(--sds-accent-50)', 100: 'var(--sds-accent-100)', 200: 'var(--sds-accent-200)', 300: 'var(--sds-accent-300)', 400: 'var(--sds-accent-400)', 500: 'var(--sds-accent-500)', 600: 'var(--sds-accent-600)', 700: 'var(--sds-accent-700)', 800: 'var(--sds-accent-800)', 900: 'var(--sds-accent-900)', 950: 'var(--sds-accent-950)' },
    neutral:  { 0: 'var(--sds-neutral-0)', 50: 'var(--sds-neutral-50)', 100: 'var(--sds-neutral-100)', 200: 'var(--sds-neutral-200)', 300: 'var(--sds-neutral-300)', 400: 'var(--sds-neutral-400)', 500: 'var(--sds-neutral-500)', 600: 'var(--sds-neutral-600)', 700: 'var(--sds-neutral-700)', 800: 'var(--sds-neutral-800)', 900: 'var(--sds-neutral-900)', 950: 'var(--sds-neutral-950)', 1000: 'var(--sds-neutral-1000)' },
    negative: { 50: 'var(--sds-negative-50)', 100: 'var(--sds-negative-100)', 200: 'var(--sds-negative-200)', 300: 'var(--sds-negative-300)', 400: 'var(--sds-negative-400)', 500: 'var(--sds-negative-500)', 600: 'var(--sds-negative-600)', 700: 'var(--sds-negative-700)', 800: 'var(--sds-negative-800)', 900: 'var(--sds-negative-900)', 950: 'var(--sds-negative-950)' },
    positive: { 50: 'var(--sds-positive-50)', 100: 'var(--sds-positive-100)', 200: 'var(--sds-positive-200)', 300: 'var(--sds-positive-300)', 400: 'var(--sds-positive-400)', 500: 'var(--sds-positive-500)', 600: 'var(--sds-positive-600)', 700: 'var(--sds-positive-700)', 800: 'var(--sds-positive-800)', 900: 'var(--sds-positive-900)', 950: 'var(--sds-positive-950)' },
    warning:  { 50: 'var(--sds-warning-50)', 100: 'var(--sds-warning-100)', 200: 'var(--sds-warning-200)', 300: 'var(--sds-warning-300)', 400: 'var(--sds-warning-400)', 500: 'var(--sds-warning-500)', 600: 'var(--sds-warning-600)', 700: 'var(--sds-warning-700)', 800: 'var(--sds-warning-800)', 900: 'var(--sds-warning-900)', 950: 'var(--sds-warning-950)' },
    info:     { 50: 'var(--sds-info-50)', 100: 'var(--sds-info-100)', 200: 'var(--sds-info-200)', 300: 'var(--sds-info-300)', 400: 'var(--sds-info-400)', 500: 'var(--sds-info-500)', 600: 'var(--sds-info-600)', 700: 'var(--sds-info-700)', 800: 'var(--sds-info-800)', 900: 'var(--sds-info-900)', 950: 'var(--sds-info-950)' },
    white:    { 50: 'var(--sds-white-50)' },
    overlays: { 100: 'var(--sds-overlays-100)', 200: 'var(--sds-overlays-200)', 300: 'var(--sds-overlays-300)', 400: 'var(--sds-overlays-400)', 500: 'var(--sds-overlays-500)', 600: 'var(--sds-overlays-600)', 700: 'var(--sds-overlays-700)', 800: 'var(--sds-overlays-800)', 900: 'var(--sds-overlays-900)', 950: 'var(--sds-overlays-950)' },
  },

  // Semantic color vars — what components should use
  semantic: {
    neutral: {
      text: {
        primary: 'var(--sds-neutral-text-primary)',
        secondary: 'var(--sds-neutral-text-secondary)',
        muted: 'var(--sds-neutral-text-muted)',
        disabled: 'var(--sds-neutral-text-disabled)',
        inverse: 'var(--sds-neutral-text-inverse)',
      },
      icon: {
        primary: 'var(--sds-neutral-icon-primary)',
        secondary: 'var(--sds-neutral-icon-secondary)',
        muted: 'var(--sds-neutral-icon-muted)',
        disabled: 'var(--sds-neutral-icon-disabled)',
        inverse: 'var(--sds-neutral-icon-inverse)',
      },
      bg: {
        default: 'var(--sds-neutral-bg-default-default)',
        hover: 'var(--sds-neutral-bg-default-hover)',
        pressed: 'var(--sds-neutral-bg-default-pressed)',
        active: 'var(--sds-neutral-bg-default-active)',
        disabled: 'var(--sds-neutral-bg-default-disabled)',
        subtle: 'var(--sds-neutral-bg-default-subtle)',
        muted: 'var(--sds-neutral-bg-default-muted)',
        inverseDefault: 'var(--sds-neutral-bg-inverse-inverse)',
        inverseHover: 'var(--sds-neutral-bg-inverse-hover)',
        inversePressed: 'var(--sds-neutral-bg-inverse-pressed)',
        inverseActive: 'var(--sds-neutral-bg-inverse-active)',
        inverseDisabled: 'var(--sds-neutral-bg-inverse-disabled)',
      },
      border: {
        default: 'var(--sds-neutral-border-default)',
        subtle: 'var(--sds-neutral-border-subtle)',
        strong: 'var(--sds-neutral-border-strong)',
        muted: 'var(--sds-neutral-border-muted)',
        light: 'var(--sds-neutral-border-light)',
        disabled: 'var(--sds-neutral-border-disabled)',
        inverse: 'var(--sds-neutral-border-inverse)',
      },
      divider: {
        default: 'var(--sds-neutral-divider-default)',
        subtle: 'var(--sds-neutral-divider-subtle)',
      },
    },
    brand: {
      text: {
        primary: 'var(--sds-brand-text-primary)',
        secondary: 'var(--sds-brand-text-secondary)',
        muted: 'var(--sds-brand-text-muted)',
        disabled: 'var(--sds-brand-text-disabled)',
        inverse: 'var(--sds-brand-text-inverse)',
        link: 'var(--sds-brand-text-link)',
        linkHover: 'var(--sds-brand-text-linkhover)',
        selected: 'var(--sds-brand-text-selected)',
      },
      bg: {
        default: 'var(--sds-brand-bg-default)',
        hover: 'var(--sds-brand-bg-hover)',
        pressed: 'var(--sds-brand-bg-pressed)',
        active: 'var(--sds-brand-bg-active)',
        disabled: 'var(--sds-brand-bg-disabled)',
        selected: 'var(--sds-brand-bg-selected)',
        selectedSubtle: 'var(--sds-brand-bg-selectedsubtle)',
      },
    },
    accent: {
      text: { default: 'var(--sds-accent-text-default)', subtle: 'var(--sds-accent-text-subtle)' },
      icon: { default: 'var(--sds-accent-icon-default)', subtle: 'var(--sds-accent-icon-subtle)', disabled: 'var(--sds-accent-icon-disabled)' },
      bg: { default: 'var(--sds-accent-bg-default)', hover: 'var(--sds-accent-bg-hover)', pressed: 'var(--sds-accent-bg-pressed)', disabled: 'var(--sds-accent-bg-disabled)', subtle: 'var(--sds-accent-bg-subtle)', subtleHover: 'var(--sds-accent-bg-subtlehover)', subtlePressed: 'var(--sds-accent-bg-subtlepressed)' },
      border: { default: 'var(--sds-accent-border-default)', subtle: 'var(--sds-accent-border-subtle)', strong: 'var(--sds-accent-border-strong)' },
    },
    positive: {
      text: { default: 'var(--sds-positive-text-default)', subtle: 'var(--sds-positive-text-subtle)' },
      icon: { default: 'var(--sds-positive-icon-default)', subtle: 'var(--sds-positive-icon-subtle)', disabled: 'var(--sds-positive-icon-disabled)' },
      bg: { default: 'var(--sds-positive-bg-default)', hover: 'var(--sds-positive-bg-hover)', pressed: 'var(--sds-positive-bg-pressed)', active: 'var(--sds-positive-bg-active)', disabled: 'var(--sds-positive-bg-disabled)', subtle: 'var(--sds-positive-bg-subtle)', subtleHover: 'var(--sds-positive-bg-subtlehover)', subtlePressed: 'var(--sds-positive-bg-subtlepressed)' },
      border: { default: 'var(--sds-positive-border-default)', subtle: 'var(--sds-positive-border-subtle)', strong: 'var(--sds-positive-border-strong)' },
    },
    negative: {
      text: { default: 'var(--sds-negative-text-default)' },
      icon: { default: 'var(--sds-negative-icon-default)' },
      bg: { default: 'var(--sds-negative-bg-default)', hover: 'var(--sds-negative-bg-hover)', pressed: 'var(--sds-negative-bg-pressed)', active: 'var(--sds-negative-bg-active)', disabled: 'var(--sds-negative-bg-disabled)', subtle: 'var(--sds-negative-bg-subtle)', subtleHover: 'var(--sds-negative-bg-subtlehover)', subtlePressed: 'var(--sds-negative-bg-subtlepressed)' },
      border: { default: 'var(--sds-negative-border-default)', subtle: 'var(--sds-negative-border-subtle)', strong: 'var(--sds-negative-border-strong)' },
    },
    warning: {
      text: { default: 'var(--sds-warning-text-default)' },
      icon: { default: 'var(--sds-warning-icon-default)' },
      bg: { default: 'var(--sds-warning-bg-default)', hover: 'var(--sds-warning-bg-hover)', pressed: 'var(--sds-warning-bg-pressed)', active: 'var(--sds-warning-bg-active)', disabled: 'var(--sds-warning-bg-disabled)', subtle: 'var(--sds-warning-bg-subtle)', subtleHover: 'var(--sds-warning-bg-subtlehover)', subtlePressed: 'var(--sds-warning-bg-subtlepressed)' },
      border: { default: 'var(--sds-warning-border-default)', subtle: 'var(--sds-warning-border-subtle)', strong: 'var(--sds-warning-border-strong)' },
    },
    info: {
      text: { default: 'var(--sds-info-text-default)' },
      icon: { default: 'var(--sds-info-icon-default)' },
      bg: { default: 'var(--sds-info-bg-default)', subtle: 'var(--sds-info-bg-subtle)' },
      border: { default: 'var(--sds-info-border-default)' },
    },
    focus: {
      default: 'var(--sds-focus-infocus-default)',
      inverse: 'var(--sds-focus-infocus-inverse)',
      error: 'var(--sds-focus-infocus-error)',
      subtle: 'var(--sds-focus-infocus-subtle)',
    },
    overlay: {
      default: 'var(--sds-overlay-bg-default)',
      elevated: 'var(--sds-overlay-bg-elevated)',
    },
    data: {
      primary: 'var(--sds-data-primary)',
      secondary: 'var(--sds-data-secondary)',
      positive: 'var(--sds-data-positive)',
      negative: 'var(--sds-data-negative)',
      warning: 'var(--sds-data-warning)',
      neutral: 'var(--sds-data-neutral)',
      inverse: 'var(--sds-data-inverse)',
    },
  },

  spacing: {
    0: 'var(--sds-spacing-0)', 2: 'var(--sds-spacing-2)', 4: 'var(--sds-spacing-4)',
    8: 'var(--sds-spacing-8)', 10: 'var(--sds-spacing-10)', 12: 'var(--sds-spacing-12)',
    16: 'var(--sds-spacing-16)', 20: 'var(--sds-spacing-20)', 24: 'var(--sds-spacing-24)',
    32: 'var(--sds-spacing-32)', 40: 'var(--sds-spacing-40)', 48: 'var(--sds-spacing-48)',
    64: 'var(--sds-spacing-64)', 96: 'var(--sds-spacing-96)', 160: 'var(--sds-spacing-160)',
    'negative-4': 'var(--sds-spacing-negative-4)', 'negative-8': 'var(--sds-spacing-negative-8)',
    'negative-12': 'var(--sds-spacing-negative-12)', 'negative-16': 'var(--sds-spacing-negative-16)',
    'negative-24': 'var(--sds-spacing-negative-24)',
  },

  radius: {
    50: 'var(--sds-radius-50)', 100: 'var(--sds-radius-100)', 200: 'var(--sds-radius-200)',
    300: 'var(--sds-radius-300)', 400: 'var(--sds-radius-400)', 500: 'var(--sds-radius-500)',
    600: 'var(--sds-radius-600)', 700: 'var(--sds-radius-700)', 800: 'var(--sds-radius-800)',
    900: 'var(--sds-radius-900)', 1000: 'var(--sds-radius-1000)', full: 'var(--sds-radius-full)',
  },

  stroke: {
    border: 'var(--sds-stroke-border)',
    focus: 'var(--sds-stroke-focus)',
    focusLarge: 'var(--sds-stroke-focuslarge)',
  },

  icon: {
    xs: 'var(--sds-icon-xs)', xs2: 'var(--sds-icon-xs2)', sm: 'var(--sds-icon-sm)',
    md: 'var(--sds-icon-md)', lg: 'var(--sds-icon-lg)', xl: 'var(--sds-icon-xl)',
    '2xl': 'var(--sds-icon-2xl)',
  },

  typography: {
    family: { webFont: 'var(--sds-family-web-font)' },
    size: {
      10: 'var(--sds-size-10)', 11: 'var(--sds-size-11)', 12: 'var(--sds-size-12)',
      14: 'var(--sds-size-14)', 16: 'var(--sds-size-16)', 18: 'var(--sds-size-18)',
      20: 'var(--sds-size-20)', 24: 'var(--sds-size-24)', 28: 'var(--sds-size-28)',
      32: 'var(--sds-size-32)', 40: 'var(--sds-size-40)', 48: 'var(--sds-size-48)',
      56: 'var(--sds-size-56)',
    },
    weight: {
      regular: 'var(--sds-weight-regular)',
      medium: 'var(--sds-weight-medium)',
      semibold: 'var(--sds-weight-semibold)',
      bold: 'var(--sds-weight-bold)',
    },
  },
} as const

export type Vars = typeof vars
export type Primitives = typeof primitives
