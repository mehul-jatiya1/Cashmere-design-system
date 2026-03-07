/**
 * Cashmere Icon Library
 * SVG icons matching the Figma icon library (node 11235:665)
 * All icons use currentColor — set color via CSS on the parent.
 */

import React from 'react'

interface IconProps {
  size?: number
  className?: string
}

const defaults = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

// ── Home ──────────────────────────────────────────────────────────────────────
export const IconHome = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M2.5 8.75 10 2.5l7.5 6.25V16.5a.75.75 0 0 1-.75.75H12.5V13a.75.75 0 0 0-.75-.75h-3.5A.75.75 0 0 0 7.5 13v4.25H3.25A.75.75 0 0 1 2.5 16.5V8.75Z"
      {...defaults}
    />
  </svg>
)

// ── Bargraph (Insights) ───────────────────────────────────────────────────────
export const IconBargraph = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <rect x="2" y="10" width="4" height="7.5" rx="0.75" {...defaults} />
    <rect x="8" y="6" width="4" height="11.5" rx="0.75" {...defaults} />
    <rect x="14" y="2.5" width="4" height="15" rx="0.75" {...defaults} />
  </svg>
)

// ── BookOpenText (Transactional History) ──────────────────────────────────────
export const IconBookOpenText = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M10 4.5C8.5 3.5 6 3 3 3v12.5c3 0 5.5.75 7 1.5 1.5-.75 4-1.5 7-1.5V3c-3 0-5.5.5-7 1.5Z" {...defaults} />
    <line x1="10" y1="4.5" x2="10" y2="17" {...defaults} />
    <line x1="5" y1="7.5" x2="8.25" y2="7.5" {...defaults} />
    <line x1="5" y1="10.5" x2="8.25" y2="10.5" {...defaults} />
    <line x1="15" y1="7.5" x2="11.75" y2="7.5" {...defaults} />
    <line x1="15" y1="10.5" x2="11.75" y2="10.5" {...defaults} />
  </svg>
)

// ── Money (Settlements) ───────────────────────────────────────────────────────
export const IconMoney = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <rect x="1.5" y="4.5" width="17" height="11" rx="1.5" {...defaults} />
    <circle cx="10" cy="10" r="2.25" {...defaults} />
    <path d="M1.5 7.5h2.25M16.25 7.5H18.5M1.5 12.5h2.25M16.25 12.5H18.5" {...defaults} />
  </svg>
)

// ── Document (Reports) ────────────────────────────────────────────────────────
export const IconDocument = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 2.5h8l3 3v12a.5.5 0 0 1-.5.5H4.5A.5.5 0 0 1 4 17.5V3a.5.5 0 0 1 .5-.5Z" {...defaults} />
    <path d="M12.5 2.5V5.5h3" {...defaults} />
    <line x1="6.5" y1="9" x2="13.5" y2="9" {...defaults} />
    <line x1="6.5" y1="12" x2="13.5" y2="12" {...defaults} />
    <line x1="6.5" y1="15" x2="10.5" y2="15" {...defaults} />
  </svg>
)

// ── Waiting / Hourglass (Test Mode) ───────────────────────────────────────────
export const IconWaiting = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M4.5 2.5h11M4.5 17.5h11" {...defaults} />
    <path d="M5.5 2.5v1.75L10 9l4.5-4.75V2.5" {...defaults} />
    <path d="M5.5 17.5v-1.75L10 11l4.5 4.75v1.75" {...defaults} />
  </svg>
)

// ── Code (Developers) ─────────────────────────────────────────────────────────
export const IconCode = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M6.5 6 2 10l4.5 4" {...defaults} />
    <path d="M13.5 6 18 10l-4.5 4" {...defaults} />
    <line x1="11.5" y1="4" x2="8.5" y2="16" {...defaults} />
  </svg>
)

// ── Settings / Gear ───────────────────────────────────────────────────────────
export const IconSettings = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M8.27 2.73a2 2 0 0 1 3.46 0l.28.48a2 2 0 0 0 2.78.74l.49-.28a2 2 0 0 1 2.74 2.74l-.28.49a2 2 0 0 0 .74 2.78l.48.28a2 2 0 0 1 0 3.46l-.48.28a2 2 0 0 0-.74 2.78l.28.49a2 2 0 0 1-2.74 2.74l-.49-.28a2 2 0 0 0-2.78.74l-.28.48a2 2 0 0 1-3.46 0l-.28-.48a2 2 0 0 0-2.78-.74l-.49.28a2 2 0 0 1-2.74-2.74l.28-.49a2 2 0 0 0-.74-2.78l-.48-.28a2 2 0 0 1 0-3.46l.48-.28a2 2 0 0 0 .74-2.78l-.28-.49A2 2 0 0 1 4.72 2.67l.49.28a2 2 0 0 0 2.78-.74l.28-.48Z"
      {...defaults}
    />
    <circle cx="10" cy="10" r="2.5" {...defaults} />
  </svg>
)

// ── ChevronDown ───────────────────────────────────────────────────────────────
export const IconChevronDown = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M5 7.5l5 5 5-5" {...defaults} />
  </svg>
)

// ── ChevronUp ─────────────────────────────────────────────────────────────────
export const IconChevronUp = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path d="M5 12.5l5-5 5 5" {...defaults} />
  </svg>
)

// ── ChevronDown 24 ────────────────────────────────────────────────────────────
export const IconChevronDown24 = ({ size = 24, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 9l6 6 6-6" {...defaults} />
  </svg>
)

// ── ChevronUp 24 ──────────────────────────────────────────────────────────────
export const IconChevronUp24 = ({ size = 24, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 15l6-6 6 6" {...defaults} />
  </svg>
)
