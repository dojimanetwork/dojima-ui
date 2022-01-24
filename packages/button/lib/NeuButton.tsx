import React from 'react'
import Button from '@mui/material/Button'
import { ButtonComponentProps } from '@dojima-ui/types'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const MuiStyles = makeStyles<Theme, NeuButtonProps>(() => ({
  button: {
    '&.MuiButton-root': {
      width: '11.75rem',
      height: '3.5rem',
      padding: '0rem',
      textTransform: 'none',
      border: '0.125rem solid rgba(0,0,0,0.08)',
      borderRadius: '1rem',
      boxShadow: '0.375rem 0.375rem 0.75rem 0rem rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0rem rgba(255, 255, 255, 0.04)',
      backgroundImage: 'radial-gradient(100deg, rgba(0, 0, 0, 0) 3%, #000 96%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      color:({color}) => color ?? '#e1aa75',
      '&:focus': {
        border: '0.25rem solid rgba(255, 255, 255, 0.02)',
        backgroundImage: 'linear-gradient(100deg, #000 3%, rgba(0, 0, 0, 0) 96%), linear-gradient(to bottom, #212426, #212426)',
      },
      '&.Mui-disabled': {
        boxShadow: 'none',
        opacity: 0.5,
      }
    }
  }
}))

interface NeuButtonProps extends ButtonComponentProps {
  color?: string;
}

function NeuButton(props: ButtonComponentProps) {
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

export default NeuButton