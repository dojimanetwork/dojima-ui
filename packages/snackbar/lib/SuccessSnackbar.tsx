import { SnackbarComponentProps } from '@dojima-ui/types'
import React from 'react'
import DojimaSnackbar from './Snackbar'

function DojimaSuccessSnackbar(props: SnackbarComponentProps) {
  const {
    horizontal,
    vertical,
    message,
    open,
    autoHideDuration,
    variant,
    keyId,
    onClose
  } = props
  return (
    <DojimaSnackbar
      horizontal={horizontal ?? 'left'}
      vertical={vertical ?? 'bottom'}
      message={message}
      open={open}
      autoHideDuration={autoHideDuration ?? 3000}
      severity='success'
      variant={variant ?? 'filled'}
      onClose={onClose}
      keyId={keyId}
    />
  )
}

export default DojimaSuccessSnackbar
