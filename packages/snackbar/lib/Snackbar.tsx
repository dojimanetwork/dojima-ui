import { Snackbar } from '@mui/material'
import React from 'react'
import DojimaAlert from '@dojima-ui/alert'
import { SnackbarComponentProps } from '@dojima-ui/types'

function DojimaSnackbar(props: SnackbarComponentProps) {
  const {
    open,
    autoHideDuration,
    variant,
    severity,
    vertical,
    horizontal,
    message,
    keyId,
    onClose
  } = props
  return (
    <Snackbar
      key={keyId}
      open={open}
      autoHideDuration={autoHideDuration ?? 5000}
      anchorOrigin={{
        vertical: vertical ?? 'bottom',
        horizontal: horizontal ?? 'left'
      }}
      onClose={onClose}
    >
      <DojimaAlert variant={variant ?? 'filled'} severity={severity ?? 'info'}>
        {message}
      </DojimaAlert>
    </Snackbar>
  )
}

export default DojimaSnackbar
