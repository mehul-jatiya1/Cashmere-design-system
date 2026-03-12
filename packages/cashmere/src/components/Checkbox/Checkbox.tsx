import React, { useRef, useEffect } from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  checked?: boolean | 'indeterminate'
  disabled?: boolean
  /** Read-only — shows state but cannot be changed (Figma: "Not editable") */
  readOnly?: boolean
  label?: string
  id?: string
  name?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

  // Compute inner box class explicitly — no CSS sibling selectors needed
  const getInnerClass = () => {
    if (readOnly)                                  return styles.innerReadOnly
    if (disabled && checked === false)             return styles.innerDisabledUnselected
    if (disabled && checked === true)              return styles.innerDisabledChecked
    if (disabled && checked === 'indeterminate')   return styles.innerDisabledIndeterminate
    if (checked === true)                          return styles.innerChecked
    if (checked === 'indeterminate')               return styles.innerIndeterminate
    return ''
  }

  // Dash colour: white when checked, grey when disabled or readOnly
  const getDashClass = () => {
    if (disabled || readOnly) return styles.dashMuted
    return ''
  }

  const wrapperCls = [
    styles.wrapper,
    disabled ? styles.disabled : '',
    readOnly ? styles.readOnly : '',
    className ?? '',
  ].filter(Boolean).join(' ')

  const innerCls = [styles.inner, getInnerClass()].filter(Boolean).join(' ')
  const dashCls  = [styles.dash,  getDashClass()].filter(Boolean).join(' ')

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
      {/*
        .box   24×24 outer container — overflow:hidden clips fill to rounded corners
        .fill  absolute inset-0 layer — driven by :hover / :active / :focus-visible
        .inner absolute inset-[12.5%] → ~18×18 visual box
      */}
      <span className={styles.box} aria-hidden="true">
        <span className={styles.fill} />
        <span className={innerCls}>
          {checked === true          && <CheckIcon />}
          {checked === 'indeterminate' && <span className={dashCls} />}
        </span>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  )
}
