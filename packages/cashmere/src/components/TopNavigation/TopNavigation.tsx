import React from 'react'
import styles from './TopNavigation.module.css'
import { IconSearch, IconBell, IconHelp, IconUser } from '../../icons'
import type { TopNavigationProps } from './TopNavigation.types'

export const TopNavigation: React.FC<TopNavigationProps> = ({
  variant = 'default',
  searchPlaceholder = 'Search',
  searchValue,
  onSearchChange,
  showNotification = true,
  hasUnreadNotifications = false,
  onNotificationClick,
  showHelp = true,
  onHelpClick,
  onProfileClick,
  heading,
  subheading,
  className,
}) => {
  if (variant === 'form') {
    return (
      <header className={`${styles.topNavForm} ${className ?? ''}`}>
        <div className={styles.headingArea}>
          {heading && <h1 className={styles.heading}>{heading}</h1>}
          {subheading && <p className={styles.subheading}>{subheading}</p>}
        </div>
      </header>
    )
  }

  return (
    <header className={`${styles.topNav} ${className ?? ''}`}>
      <div className={styles.searchArea}>
        <div className={styles.searchBar}>
          <span className={styles.searchIconWrap}>
            <IconSearch size={24} />
          </span>
          <input
            className={styles.searchInput}
            type="search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={e => onSearchChange?.(e.target.value)}
            aria-label="Search"
          />
        </div>
      </div>
      <div className={styles.trailingIcons}>
        {showNotification && (
          <button
            type="button"
            className={styles.iconBtn}
            onClick={onNotificationClick}
            aria-label="Notifications"
          >
            <IconBell size={24} />
            {hasUnreadNotifications && (
              <span className={styles.notificationBadge} aria-hidden="true" />
            )}
          </button>
        )}
        {showHelp && (
          <button
            type="button"
            className={styles.iconBtn}
            onClick={onHelpClick}
            aria-label="Help"
          >
            <IconHelp size={24} />
          </button>
        )}
        <button
          type="button"
          className={styles.iconBtn}
          onClick={onProfileClick}
          aria-label="Profile"
        >
          <IconUser size={24} />
        </button>
      </div>
    </header>
  )
}
