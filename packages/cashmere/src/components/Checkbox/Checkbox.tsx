import React, { useRef, useEffect } from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  /** Whether the checkbox is checked, unchecked, or in an indeterminate state */
  checked?: boolean | 'indeterminate'
  /** Whether the checkbox is disabled and non-interactive */
  disabled?: boolean
  /** Whether the checkbox is read-only — shows current state but cannot be changed */
  readOnly?: boolean
  /** Optional visible label text */
  label?: string
  /** HTML id for the input — used to associate with an external label */
  id?: string
  /** HTML name attribute for form submission */
  name?: string
  /** Change handler — not called when readOnly or disabled */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IndeterminateIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 6H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  readOnly = false,
  label,
  id,
  name,
  onChange,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = checked === 'indeterminate'
    }
  }, [checked])

  const wrapperCls = [
    styles.wrapper,
    disabled ? styles.disabled : '',
    readOnly ? styles.readOnly : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={wrapperCls}>
      <input
        ref={inputRef}
        type="checkbox"
        className={styles.input}
        checked={checked === 'indeterminate' ? false : Boolean(checked)}
        disabled={disabled}
        readOnly={readOnly}
        id={id}
        name={name}
        onChange={readOnly || disabled ? undefined : onChange}
        aria-checked={checked === 'indeterminate' ? 'mixed' : Boolean(checked)}
        aria-readonly={readOnly || undefined}
      />
      <span className={styles.box} aria-hidden="true">
        {checked === true && <CheckIcon />}
        {checked === 'indeterminate' && <IndeterminateIcon />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
