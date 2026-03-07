import React from 'react'
import { Button } from '../Button'
import { Tags } from '../Tags'
import type { TagsStatus } from '../Tags'
import { Breadcrumbs } from '../Breadcrumbs'
import type { BreadcrumbItem } from '../Breadcrumbs'
import styles from './PageHeaderset.module.css'

export interface PageHeadersetProps {
  type?: 'homepage' | 'internalpage'
  heading: string
  subheading?: string
  /** internalpage only */
  breadcrumbs?: {
    items?: BreadcrumbItem[]
    currentPage: string
  }
  /** internalpage only */
  tag?: {
    status: TagsStatus
    label: string
  }
  primaryAction?: {
    label: string
    onClick?: () => void
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
  }
  className?: string
}

export const PageHeaderset: React.FC<PageHeadersetProps> = ({
  type = 'homepage',
  heading,
  subheading,
  breadcrumbs,
  tag,
  primaryAction,
  secondaryAction,
  className,
}) => {
  const hasButtons = primaryAction || secondaryAction

  const buttonSet = hasButtons ? (
    <div className={styles.buttonSet}>
      {secondaryAction && (
        <Button variant="secondary" size="large" onClick={secondaryAction.onClick}>
          {secondaryAction.label}
        </Button>
      )}
      {primaryAction && (
        <Button variant="primary" size="large" onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
    </div>
  ) : null

  if (type === 'homepage') {
    return (
      <div className={[styles.root, styles.homepage, className ?? ''].filter(Boolean).join(' ')}>
        <div className={styles.titleRow}>
          <h1 className={styles.heading}>{heading}</h1>
          {buttonSet}
        </div>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
      </div>
    )
  }

  return (
    <div className={[styles.root, styles.internalpage, className ?? ''].filter(Boolean).join(' ')}>
      {breadcrumbs && (
        <Breadcrumbs
          items={breadcrumbs.items}
          currentPage={breadcrumbs.currentPage}
        />
      )}
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div className={styles.titleWithTag}>
            <h1 className={styles.heading}>{heading}</h1>
            {tag && (
              <Tags size="large" type="default" status={tag.status}>
                {tag.label}
              </Tags>
            )}
          </div>
          {buttonSet}
        </div>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
      </div>
    </div>
  )
}
