import React from 'react'
import styles from './Breadcrumbs.module.css'

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  currentPage: string
  className?: string
}

function ChevronRight() {
  return (
    <svg
      className={styles.chevron}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.5 2.5L8 6L4.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [], currentPage, className }) => {
  return (
    <nav aria-label="Breadcrumb" className={[styles.breadcrumbs, className ?? ''].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <React.Fragment key={item.href}>
          <a href={item.href} className={styles.link}>
            {item.label}
          </a>
          <ChevronRight />
        </React.Fragment>
      ))}
      <span className={styles.current} aria-current="page">
        {currentPage}
      </span>
    </nav>
  )
}
