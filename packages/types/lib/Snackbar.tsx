import { AlertProps, SnackbarOrigin } from '@mui/material'

export interface SnackbarComponentProps extends AlertProps {
  open?: boolean
  autoHideDuration?: number
  vertical?: SnackbarOrigin['vertical']
  horizontal?: SnackbarOrigin['horizontal']
  message?: string
  keyId?: any
}
