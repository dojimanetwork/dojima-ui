import { GridComponentProps } from './Grid'
import { FormControlComponentProps } from './Common'

export type ParsableDate = string | number | object | Date | null | undefined

export interface DatePickerComponentProps
  extends FormControlComponentProps,
    GridComponentProps {
  value: Date | null
  label: string
  dateFormat: string
  setValue?: React.Dispatch<React.SetStateAction<Date | null>>
  maxDate?: ParsableDate
  minDate?: ParsableDate
  handleChange?: any
  name: string
}
