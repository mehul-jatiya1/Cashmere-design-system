import React from 'react'
import styles from './FilterChips.module.css'

export interface FilterChipsProps {
  /** The label text displayed in the chip */
  label: string
  /** Whether the chip is in the selected/active state */
  isActive?: boolean
  /** Whether the chip is disabled */
  disabled?: boolean
  /** Whether to show the badge count */
  showBadge?: boolean
  /** The number displayed in the badge */
  badgeCount?: number
  /** Icon rendered before the label */
  leadingIcon?: React.ReactNode
  /** Icon rendered after the badge (defaults to a chevron down) */
  trailingIcon?: React.ReactNode
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const FilterChips: React.FC<FilterChipsProps> = ({
  label,
  isActive = false,
  disabled = false,
  showBadge = false,
  badgeCount,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
}) => {
  const cls = [
    styles.chip,
    isActive ? styles.active : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      className={cls}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {leadingIcon && <span className={styles.leadingIcon}>{leadingIcon}</span>}
      <span className={styles.label}>{label}</span>
      {showBadge && badgeCount != null && (
        <span className={styles.badge}>{badgeCount}</span>
      )}
      <span className={styles.trailingIcon}>
        {trailingIcon ?? <ChevronDown />}
      </span>
    </button>
  )
}
