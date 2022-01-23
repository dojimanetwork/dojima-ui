import React from 'react'
import Button from '@mui/material/Button'
import { ButtonComponentProps } from '@dojima-ui/types'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const MuiStyles = makeStyles<Theme, FlatBtnProps>(() => ({
  button: {
    '&.MuiButton-root': {
      width:({width}) => width ?? '6rem',
      height:({height}) => height ?? '2.5rem',
      padding: '0rem',
      border: '0rem none transparent',
      borderRadius: '0.5rem',
      textTransform:({textTransform}) => (textTransform) ?? 'lowercase',
      margin: ({margin}) => (margin) ?? '20px 20px 0px 0px',
      backgroundColor: ({bgColor}) => bgColor ?? 'white',
      color: ({color}) => color ?? 'black',
      '&.Mui-disabled': {
        boxShadow: 'none',
        opacity: 0.5,
      },
      "&:hover": {
        backgroundColor: ({hoverColor}) => hoverColor ?? '#4b4e4f',
      },
    }
  }
}))

interface FlatBtnProps extends ButtonComponentProps {
  bgColor?: string;
  hoverColor?: string;
  width?: string;
  height?: string;
  textTransform?: string;
  margin?: string;
}

function FlatButton(props: FlatBtnProps) {
  const {
    text,
    onClick,
    disable,
    fullWidth,
    buttonStyles
  } = props

  const classes = MuiStyles({...props})

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