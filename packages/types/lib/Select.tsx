import { GridComponentProps } from './Grid'
import { FormControlComponentProps } from './Common'

export type SelectValueType = 'number' | 'string'
export type SelectVariant = 'standard' | 'outlined' | 'filled'

export interface SelectComponentProps
  extends FormControlComponentProps,
    GridComponentProps {
  options: Array<any>
  handleChange?:
    | ((
        event: React.ChangeEvent<{
          name?: string | undefined
          value: unknown
        }>,
        child?: React.ReactNode
      ) => void)
    | undefined
    | any
  variant?: SelectVariant
  handleBlur?:
    | {
        (e: React.FocusEvent<any>): void
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
      }
    | undefined
  type: SelectValueType
  emptyValueLabel?: string
  selectClassname?: string
}
