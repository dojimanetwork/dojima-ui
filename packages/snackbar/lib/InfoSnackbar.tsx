import { SnackbarComponentProps } from '@dojima-ui/types'
import React from 'react'
import DojimaSnackbar from './Snackbar'

function DojimaInfoSnackbar(props: SnackbarComponentProps) {
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
      severity='info'
      variant={variant ?? 'filled'}
      Close={Close}
    />
  )
}

export default DojimaInfoSnackbar
