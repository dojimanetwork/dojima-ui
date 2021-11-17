import { FormControlComponentProps } from './Common'

export type CheckboxSize = 'small' | 'medium' | undefined

export interface CheckboxGroupComponentProps extends FormControlComponentProps {
  options: any[]
  state?: {} | any
  setState: React.Dispatch<any>
  horizontal?: boolean
  checkBoxSize?: CheckboxSize
  name: string
}
