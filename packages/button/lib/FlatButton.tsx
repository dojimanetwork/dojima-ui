import React from 'react'
import Button from '@mui/material/Button'
import { ButtonComponentProps } from '@dojima-ui/types'
import { makeStyles } from '@mui/styles'

const MuiStyles = makeStyles(() => ({
  button: {
    '&.MuiButton-root': {
      width: '6rem',
      height: '2.5rem',
      padding: '0rem',
      border: '0rem none transparent',
      borderRadius: '0.5rem',
      backgroundColor: '#000',
      color: '#cfd0d0',
      '&.Mui-disabled': {
        boxShadow: 'none',
        opacity: 0.5,
      }
    }
  }
}))

function FlatButton(props: ButtonComponentProps) {
  const {
    text,
    onClick,
    disable,
    fullWidth,
    buttonStyles
  } = props

  const classes = MuiStyles()

  return (
    <Button
      fullWidth={fullWidth}
      style={buttonStyles}
      className={classes.button}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </Button>
  )
}

export default FlatButton