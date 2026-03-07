import React from 'react'

export interface NavItem {
  id: string
  label: string
  icon?: React.ReactNode
  /** 'chevron' renders a standard expand chevron; any ReactNode renders inline */
  trailing?: 'chevron' | React.ReactNode
  href?: string
  onClick?: () => void
}

export interface NavSection {
  id: string
  /** Bold 20px section header label */
  title?: string
  /** Whether the section header shows a collapse chevron and can be toggled */
  collapsible?: boolean
  items: NavItem[]
}

export interface ProductVertical {
  id: string
  label: string
}

export interface NavigationDrawerProps {
  /** Navigation sections */
  sections: NavSection[]
  /** ID of the currently active nav item */
  activeItemId?: string
  /** Logo rendered at top (Cashfree Payments wordmark) */
  logo?: React.ReactNode
  /** App name logo rendered alongside the main logo, bottom-aligned (e.g. "pulse") */
  appLogo?: React.ReactNode
  /** Product verticals for the dropdown selector */
  productVerticals?: ProductVertical[]
  /** Currently selected product vertical ID */
  activeProductId?: string
  /** Whether the product dropdown overlay is open */
  productDropdownOpen?: boolean
  /** Called when a nav item is clicked */
  onItemClick?: (item: NavItem) => void
  /** Called when a product vertical is selected */
  onProductSelect?: (product: ProductVertical) => void
  /** Called when the product dropdown toggle is clicked */
  onProductDropdownToggle?: () => void
  /** Additional class name */
  className?: string
}
