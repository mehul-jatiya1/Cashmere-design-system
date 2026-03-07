import React, { useState } from 'react'
import styles from './NavigationDrawer.module.css'
import {
  IconChevronDown,
  IconChevronUp,
  IconChevronDown24,
  IconChevronUp24,
} from '../../icons'
import type {
  NavigationDrawerProps,
  NavItem,
  NavSection,
  ProductVertical,
} from './NavigationDrawer.types'

/* ── NavItem row ────────────────────────────────────────────────────────── */
interface NavItemRowProps {
  item: NavItem
  isActive: boolean
  onItemClick: (item: NavItem) => void
}

const NavItemRow: React.FC<NavItemRowProps> = ({ item, isActive, onItemClick }) => (
  <div className={styles.itemWrapper}>
    <button
      type="button"
      className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
      onClick={() => { item.onClick?.(); onItemClick(item) }}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className={styles.navItemIconLabel}>
        {item.icon && <span className={styles.navItemIcon}>{item.icon}</span>}
        <span className={styles.navItemLabel}>{item.label}</span>
      </span>
      {item.trailing === 'chevron' && (
        <span className={styles.navItemTrailingIcon}><IconChevronDown size={20} /></span>
      )}
      {item.trailing && item.trailing !== 'chevron' && (
        <span className={styles.navItemTrailing}>{item.trailing}</span>
      )}
    </button>
  </div>
)

/* ── Section ────────────────────────────────────────────────────────────── */
interface SectionProps {
  section: NavSection
  activeItemId?: string
  onItemClick: (item: NavItem) => void
}

const Section: React.FC<SectionProps> = ({ section, activeItemId, onItemClick }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      {section.title && (
        <div
          className={`${styles.sectionHeader} ${section.collapsible ? styles.sectionHeaderCollapsible : ''}`}
          onClick={section.collapsible ? () => setCollapsed(c => !c) : undefined}
          role={section.collapsible ? 'button' : undefined}
          tabIndex={section.collapsible ? 0 : undefined}
          onKeyDown={section.collapsible ? (e) => { if (e.key === 'Enter' || e.key === ' ') setCollapsed(c => !c) } : undefined}
          aria-expanded={section.collapsible ? !collapsed : undefined}
        >
          <span className={styles.sectionHeaderLabel}>{section.title}</span>
          {section.collapsible && (
            <span className={styles.sectionHeaderChevron}>
              {collapsed ? <IconChevronDown24 size={24} /> : <IconChevronUp24 size={24} />}
            </span>
          )}
        </div>
      )}
      {!collapsed && (
        <div className={styles.itemsContainer}>
          {section.items.map((item: NavItem) => (
            <NavItemRow
              key={item.id}
              item={item}
              isActive={item.id === activeItemId}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── NavigationDrawer ───────────────────────────────────────────────────── */
export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  sections,
  activeItemId,
  logo,
  productVerticals,
  activeProductId,
  productDropdownOpen = false,
  onItemClick,
  onProductSelect,
  onProductDropdownToggle,
  className,
}) => {
  const activeProduct = productVerticals?.find(v => v.id === activeProductId) ?? productVerticals?.[0]

  const handleItemClick = (item: NavItem) => onItemClick?.(item)

  return (
    <nav
      className={`${styles.drawer} ${className ?? ''}`}
      aria-label="Main navigation"
    >
      {/* Logo */}
      {logo && <div className={styles.logoArea}>{logo}</div>}

      {/* Product vertical selector */}
      {productVerticals && productVerticals.length > 0 && (
        <button
          type="button"
          className={`${styles.productTrigger} ${productDropdownOpen ? styles.productTriggerOpen : ''}`}
          onClick={onProductDropdownToggle}
          aria-expanded={productDropdownOpen}
          aria-haspopup="listbox"
        >
          <span className={styles.productTriggerLabel}>{activeProduct?.label}</span>
          <span className={styles.productTriggerChevron}>
            {productDropdownOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
          </span>
        </button>
      )}

      {/* Product dropdown overlay */}
      {productDropdownOpen && productVerticals && (
        <div className={styles.productDropdown} role="listbox" aria-label="Select product vertical">
          {productVerticals.map((v: ProductVertical) => (
            <button
              key={v.id}
              type="button"
              role="option"
              aria-selected={v.id === activeProductId}
              className={`${styles.productDropdownItem} ${v.id === activeProductId ? styles.productDropdownItemActive : ''}`}
              onClick={() => onProductSelect?.(v)}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {/* Sections */}
      <div className={styles.sectionsWrapper}>
        {sections.map((section: NavSection, idx: number) => (
          <React.Fragment key={section.id}>
            {idx > 0 && <div className={styles.divider} />}
            <Section
              section={section}
              activeItemId={activeItemId}
              onItemClick={handleItemClick}
            />
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}
