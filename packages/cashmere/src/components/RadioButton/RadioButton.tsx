import React, { createContext, useContext, useRef, useState } from 'react'
import styles from './RadioButton.module.css'

// ─── Types ────────────────────────────────────────────────────────────────────

export type RadioSize = 'small' | 'medium' | 'large'
export type RadioGroupOrientation = 'vertical' | 'horizontal'
export type RadioGroupLabelPosition = 'top' | 'left'
export type RadioGroupValidationState = 'none' | 'error'
export type RadioGroupNecessityIndicator = 'required' | 'optional' | 'none'

export interface RadioGroupProps {
  children: React.ReactNode
  label: string
  value?: string
  defaultValue?: string
  onChange?: (event: { name?: string; value: string }) => void
  name?: string
  size?: RadioSize
  orientation?: RadioGroupOrientation
  labelPosition?: RadioGroupLabelPosition
  helpText?: string
  errorText?: string
  validationState?: RadioGroupValidationState
  isDisabled?: boolean
  isRequired?: boolean
  necessityIndicator?: RadioGroupNecessityIndicator
  testID?: string
}

export interface RadioProps {
  value: string
  children: string
  helpText?: string
  isDisabled?: boolean
  size?: RadioSize
  testID?: string
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface ContextValue {
  name: string
  selectedValue: string | undefined
  onChange: (value: string) => void
  isDisabled: boolean
  size: RadioSize
  validationState: RadioGroupValidationState
}

const RadioGroupContext = createContext<ContextValue | null>(null)

function useRadioGroup(): ContextValue {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error('<Radio> must be a child of <RadioGroup>')
  return ctx
}

// ─── ID counter (React >=17 compatible) ──────────────────────────────────────

let _idCounter = 0
function nextId(prefix: string) {
  return `${prefix}-${++_idCounter}`
}

// ─── RadioGroup ───────────────────────────────────────────────────────────────

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  label,
  value: controlled,
  defaultValue,
  onChange,
  name: nameProp,
  size = 'medium',
  orientation = 'vertical',
  labelPosition = 'top',
  helpText,
  errorText,
  validationState = 'none',
  isDisabled = false,
  isRequired = false,
  necessityIndicator = 'none',
  testID,
}) => {
  const nameRef = useRef(nameProp ?? nextId('rg'))
  const labelId = `${nameRef.current}-label`

  const [internal, setInternal] = useState(defaultValue)
  const selectedValue = controlled !== undefined ? controlled : internal

  const handleChange = (val: string) => {
    if (controlled === undefined) setInternal(val)
    onChange?.({ name: nameRef.current, value: val })
  }

  const showError = validationState === 'error'

  return (
    <RadioGroupContext.Provider
      value={{
        name: nameRef.current,
        selectedValue,
        onChange: handleChange,
        isDisabled,
        size,
        validationState,
      }}
    >
      <div
        role="group"
        aria-labelledby={labelId}
        aria-required={isRequired || undefined}
        data-testid={testID}
        className={[
          styles.group,
          labelPosition === 'left' ? styles.groupLeft : '',
          isDisabled ? styles.groupDisabled : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span id={labelId} className={styles.groupLabel}>
          {label}
          {necessityIndicator === 'required' && (
            <span className={styles.required} aria-hidden="true">
              {'\u2009✱'}
            </span>
          )}
          {necessityIndicator === 'optional' && (
            <span className={styles.optional}>&ensp;(optional)</span>
          )}
        </span>

        <div className={[styles.list, styles[orientation]].filter(Boolean).join(' ')}>
          {children}
        </div>

        {!showError && helpText && <span className={styles.helpText}>{helpText}</span>}
        {showError && errorText && (
          <span className={styles.errorText} role="alert">
            {errorText}
          </span>
        )}
      </div>
    </RadioGroupContext.Provider>
  )
}

// ─── Radio ────────────────────────────────────────────────────────────────────

export const Radio: React.FC<RadioProps> = ({
  value,
  children,
  helpText,
  isDisabled = false,
  size: sizeProp,
  testID,
}) => {
  const { name, selectedValue, onChange, isDisabled: groupDisabled, size: groupSize, validationState } =
    useRadioGroup()

  const idRef = useRef(nextId('radio'))
  const size = sizeProp ?? groupSize
  const disabled = isDisabled || groupDisabled
  const checked = selectedValue === value
  const hasError = validationState === 'error'

  return (
    <div
      className={[styles.item, styles[size], disabled ? styles.itemDisabled : '']
        .filter(Boolean)
        .join(' ')}
    >
      <label className={styles.label} htmlFor={idRef.current}>
        <input
          type="radio"
          id={idRef.current}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(value)}
          className={styles.nativeInput}
          data-testid={testID}
        />
        <span
          className={[
            styles.circle,
            checked ? styles.circleSelected : '',
            hasError && !checked ? styles.circleError : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-hidden="true"
        >
          {checked && <span className={styles.dot} />}
        </span>
        <span className={styles.labelText}>{children}</span>
      </label>
      {helpText && <span className={styles.itemHelpText}>{helpText}</span>}
    </div>
  )
}
