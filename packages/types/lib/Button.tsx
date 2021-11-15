import { GridComponentProps } from './Grid'
import { variant, color, CssComponentProps } from './Common'
import { CSSProperties } from 'react'

export interface ButtonComponentProps
  extends GridComponentProps,
    CssComponentProps {
  text?: string
  variant?: variant
  color?: color
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disable?: boolean
  fullWidth?: boolean
  className?: string
  buttonStyles?: CSSProperties
}
