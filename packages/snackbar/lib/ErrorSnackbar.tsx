import { SnackbarComponentProps } from '@dojima-ui/types'
import React from 'react'
import DojimaSnackbar from './Snackbar'

function DojimaErrorSnackbar(props: SnackbarComponentProps) {
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
      severity='error'
      variant={variant ?? 'filled'}
      keyId={keyId}
      onClose={onClose}
    />
  )
}

export default DojimaErrorSnackbar
