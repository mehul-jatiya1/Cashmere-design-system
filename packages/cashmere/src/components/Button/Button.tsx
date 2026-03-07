import React from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'medium' | 'small'
  negative?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  iconOnly?: React.ReactNode
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  negative = false,
  leadingIcon,
  trailingIcon,
  iconOnly,
  children,
  disabled,
  className,
  ...rest
}) => {
  const cls = [
    styles.base,
    styles[variant],
    styles[size],
    negative ? styles.negative : '',
    iconOnly ? styles.iconOnly : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  if (iconOnly) {
    return (
      <button type="button" className={cls} disabled={disabled} aria-label={rest['aria-label']} {...rest}>
        <span className={styles.icon}>{iconOnly}</span>
      </button>
    )
  }

  return (
    <button type="button" className={cls} disabled={disabled} {...rest}>
      {leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}
      <span className={styles.label}>{children}</span>
      {trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}
    </button>
  )
}
