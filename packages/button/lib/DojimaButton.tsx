import React from 'react'
import Button from '@mui/material/Button'
import { ButtonComponentProps } from '@dojima-ui/types'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

interface DojimaButtonProps extends ButtonComponentProps{
  width?: string;
  height?: string;
}

const MuiStyles = makeStyles<Theme, DojimaButtonProps>(() => ({
  button: {
    '&.MuiButton-root': {
      width:({width}) => width ?? '18.75rem',
      height:({height}) => height ?? '3.5rem',
      padding: '0rem',
      border: '0.25rem solid transparent',
      borderRadius: '1rem',
      boxShadow: '0.375rem 0.375rem 0.75rem 0rem rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0rem rgba(255, 255, 255, 0.04)',
      backgroundImage: 'linear-gradient(to bottom, #ffa651, #e17813), linear-gradient(99deg, #2e3234 10%, #212426 92%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      color: '#fff',
      '&:focus': {
        color: '#ffffff60',
        backgroundImage: 'linear-gradient(to bottom, #ffa651, #e17813), linear-gradient(96deg, #3b4042 5%, #1d1f21 93%)',
        boxShadow: '0.375rem 0.375rem 0.75rem 0rem rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0rem rgba(255, 255, 255, 0.04), inset 0rem 0.875rem 0.875rem 0rem rgba(0, 0, 0, 0.32)',
      },
      '&.Mui-disabled': {
        boxShadow: 'none',
        opacity: 0.5,
      }
    }
  }
}))

function DojimaButton(props: DojimaButtonProps) {
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

export default DojimaButton