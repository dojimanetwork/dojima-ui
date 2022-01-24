import { GridComponentProps } from './Grid'
import { color, CssComponentProps } from './Common'
import { CSSProperties } from 'react'

export type buttonVariant = 'text' | 'outlined' | 'contained'

export interface ButtonComponentProps
  extends GridComponentProps,
    CssComponentProps {
  text?: string
  variant?: buttonVariant
  color?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disable?: boolean
  fullWidth?: boolean
  className?: string
  buttonStyles?: CSSProperties
}
