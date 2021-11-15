import React from 'react'
import Button from '@mui/material/Button'
import { ButtonComponentProps } from '@dojima-ui/types'
import { Grid } from '@mui/material'

function DojimaButton(props: ButtonComponentProps) {
  const {
    text,
    variant,
    onClick,
    color,
    startIcon,
    endIcon,
    className,
    justifyContent,
    xs,
    lg,
    md,
    xl,
    GridStyles,
    disable,
    alignContent,
    alignItems,
    fullWidth,
    buttonStyles
  } = props

  return (
    <Grid
      container
      item
      justifyContent={justifyContent}
      xs={xs ?? false}
      md={md ?? false}
      lg={lg ?? false}
      xl={xl ?? false}
      className={GridStyles}
      alignContent={alignContent}
      alignItems={alignItems}
    >
      <Button
        fullWidth={fullWidth}
        variant={variant ?? 'contained'}
        startIcon={startIcon}
        endIcon={endIcon}
        style={buttonStyles}
        className={className}
        onClick={onClick}
        disabled={disable}
        color={color ?? 'primary'}
      >
        {text}
      </Button>
    </Grid>
  )
}

export default DojimaButton
