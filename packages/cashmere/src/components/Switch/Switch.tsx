import React from 'react'
import styles from './Switch.module.css'

export interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
  id?: string
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  id,
}) => {
  const handleClick = () => {
    if (!disabled) onChange(!checked)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <label className={styles.wrapper} htmlFor={id}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        className={`${styles.track} ${checked ? styles.trackOn : styles.trackOff} ${disabled ? styles.disabled : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        <span className={`${styles.thumb} ${checked ? styles.thumbOn : ''}`} />
      </button>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
