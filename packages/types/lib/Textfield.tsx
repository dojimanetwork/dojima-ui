import { ChangeEventHandler, ReactNode, ReactPortal } from 'react'
import { FormControlComponentProps } from './Common'
import { GridComponentProps } from './Grid'

export type TextFieldInputTypes =
  | 'text'
  | 'number'
  | 'time'
  | 'checkbox'
  | 'password'
  | 'datetime'
  | 'email'

export type TextfieldVariant = 'filled' | 'standard' | 'outlined'

export interface TextfieldComponentProps
  extends GridComponentProps,
    FormControlComponentProps {
  variant?: TextfieldVariant
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  type: TextFieldInputTypes
  autoFocus?: boolean
  multiline?: boolean
  rows?: number | string
  rowsMax?: number | string
  handleBlur?:
    | {
        (e: React.FocusEvent<any>): void
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
      }
    | undefined
  formControl?: string
  onMouseOut?: React.MouseEventHandler<HTMLDivElement>
  endAdornment?: ReactNode | ReactPortal
  labelShrink?: boolean;
  autoComplete?: string;
}
