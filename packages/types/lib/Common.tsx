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
  id?: any
  name?: string
  required?: boolean
  value?: any
  fullWidth?: boolean
  error?: boolean
  helperText?: string
  disable?: boolean
  className?: string
  placeholder?: string
}
