import { SnackbarComponentProps } from '@dojima-ui/types'
import DojimaSnackbar from './Snackbar'
import React from 'react'

function DojimaWarningSnackbar(props: SnackbarComponentProps) {
  const {
    horizontal,
    vertical,
    message,
    open,
    autoHideDuration,
    variant,
    keyId,
    Close
  } = props
  return (
    <DojimaSnackbar
      horizontal={horizontal ?? 'left'}
      vertical={vertical ?? 'bottom'}
      message={message}
      open={open}
      keyId={keyId}
      autoHideDuration={autoHideDuration ?? 3000}
      severity='warning'
      variant={variant ?? 'filled'}
      Close={Close}
    />
  )
}

export default DojimaWarningSnackbar
