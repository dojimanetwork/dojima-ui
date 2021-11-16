import { CSSProperties } from 'react'

export type variant = 'text' | 'outlined' | 'contained'
export type color =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
export interface CssComponentProps {
  styles?: CSSProperties
  className?: string
}

export interface FormControlComponentProps {
  label: string
  id?: unknown
  name?: string
  required?: boolean
  value?: unknown
  fullWidth?: boolean
  error?: boolean
  helperText?: boolean
  disable?: boolean
  className?: string
  placeholder?: string
}
