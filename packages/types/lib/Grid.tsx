import { GridSize, GridSpacing, GridWrap } from '@mui/material'
import { ReactNode } from 'react'

export type GridItemsAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface GridComponentProps {
  xs?: boolean | GridSize
  md?: boolean | GridSize
  lg?: boolean | GridSize
  xl?: boolean | GridSize
  children?: ReactNode
  className?: string
  container?: boolean
  justifyContent?: GridJustification
  spacing?: GridSpacing
  alignItems?: GridItemsAlignment
  alignContent?: GridContentAlignment
  direction?: GridDirection
  wrap?: GridWrap
  item?: boolean
  GridStyles?: string
}
