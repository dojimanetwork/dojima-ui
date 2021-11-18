import { Alert, AlertProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

function DojimaAlert(props: AlertProps) {
  const { variant, elevation } = props
  const classes = MuiStyles()
  return (
    <Alert
      variant={variant}
      className={classes.root}
      elevation={elevation ?? 6}
      {...props}
    />
  )
}

const MuiStyles = makeStyles(() => ({
  root: {
    whiteSpace: 'pre-line'
  }
}))

export default DojimaAlert
