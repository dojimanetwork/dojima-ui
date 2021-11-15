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
