import { AlertProps, SnackbarCloseReason, SnackbarOrigin } from '@mui/material'
import React from 'react';

export interface SnackbarComponentProps extends AlertProps {
  open?: boolean
  autoHideDuration?: number
  vertical?: SnackbarOrigin['vertical']
  horizontal?: SnackbarOrigin['horizontal']
  message?: string
  keyId?: any;
  Close?: ((event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void) | undefined
}
