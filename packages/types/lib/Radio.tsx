import { GridComponentProps } from './Grid'
import { FormControlComponentProps } from './Common'

export type RadioButtonSize = 'small' | 'medium' | undefined

export type RadioGroupSelectionType = 'single' | 'multiple'

export interface RadioComponentProps
  extends FormControlComponentProps,
    GridComponentProps {
  options: string[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
  horizontal?: boolean
  radioSize?: RadioButtonSize
  selectionType: RadioGroupSelectionType
  radioClassname?: string
  name: string
}
