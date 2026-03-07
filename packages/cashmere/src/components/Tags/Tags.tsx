import React from 'react'
import styles from './Tags.module.css'

export type TagsStatus = 'positive' | 'negative' | 'warning' | 'information' | 'intermediate'
export type TagsType = 'default' | 'icon' | 'background' | 'text' | 'corners'
export type TagsSize = 'small' | 'large'

export interface TagsProps {
  size?: TagsSize
  type?: TagsType
  status?: TagsStatus
  children: React.ReactNode
  className?: string
}

function StatusIcon({ status, className }: { status: TagsStatus; className?: string }) {
  switch (status) {
    case 'positive':
      return (
        <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'negative':
      return (
        <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'warning':
      return (
        <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 4V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="6" cy="8.5" r="0.75" fill="currentColor" />
        </svg>
      )
    case 'information':
      return (
        <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 5.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="6" cy="3.5" r="0.75" fill="currentColor" />
        </svg>
      )
    case 'intermediate':
      return (
        <svg className={className} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4 6H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}

export const Tags: React.FC<TagsProps> = ({
  size = 'small',
  type = 'default',
  status = 'positive',
  children,
  className,
}) => {
  const hasIcon = type === 'default' || type === 'icon' || type === 'corners'
  const hasBg = type === 'default' || type === 'background' || type === 'corners'

  const cls = [
    styles.tag,
    styles[size],
    styles[status],
    hasBg ? styles.withBg : '',
    type === 'corners' ? styles.corners : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={cls}>
      {hasIcon && <StatusIcon status={status} className={styles.icon} />}
      <span className={styles.text}>{children}</span>
    </span>
  )
}
