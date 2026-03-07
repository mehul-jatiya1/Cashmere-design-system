export interface TopNavigationProps {
  /**
   * 'default' — search bar + notification / help / profile icons
   * 'form'    — page heading + help / profile icons, with bottom border
   */
  variant?: 'default' | 'form'

  // ── Default variant ──────────────────────────────────────────────────────
  searchPlaceholder?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  showNotification?: boolean
  /** Shows accent dot badge on the bell icon */
  hasUnreadNotifications?: boolean
  onNotificationClick?: () => void

  // ── Shared ───────────────────────────────────────────────────────────────
  showHelp?: boolean
  onHelpClick?: () => void
  onProfileClick?: () => void

  // ── Form variant ─────────────────────────────────────────────────────────
  heading?: string
  subheading?: string

  className?: string
}
