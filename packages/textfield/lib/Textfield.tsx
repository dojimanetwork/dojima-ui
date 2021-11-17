import {
  createStyles,
  FormControl,
  FormHelperText,
  Grid,
  InputBase,
  InputLabel
} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import { TextfieldComponentProps } from '@dojima-ui/types'

function DojimaTextfield(props: TextfieldComponentProps) {
  const {
    label,
    onChange,
    name,
    required,
    value,
    type,
    autoFocus,
    fullWidth,
    lg,
    md,
    xl,
    xs,
    error,
    helperText,
    handleBlur,
    disable = false,
    className,
    onMouseOut,
    placeholder,
    endAdornment,
    formControl
  } = props

  // const labelProps = !labelShrink ? null : { shrink: true };

  return (
    <Grid
      container
      item
      xs={xs ?? 12}
      md={md ?? false}
      lg={lg ?? false}
      xl={xl ?? false}
      className={className}
    >
      <FormControl
        // variant={variant ?? 'outlined'}
        className={formControl}
        fullWidth={fullWidth ?? false}
        error={error}
        required={required}
        disabled={disable}
      >
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
        <BootstrapInput
          error={error}
          fullWidth={fullWidth ?? false}
          type={type}
          key={name}
          onChange={onChange}
          id={name}
          name={name}
          required={required ?? true}
          value={value}
          autoFocus={autoFocus}
          onBlur={handleBlur}
          disabled={disable}
          placeholder={placeholder}
          onMouseOut={onMouseOut}
          onKeyDown={(event) =>
            type === 'number' &&
            (event.key === 'e' ||
              event.key === '+' ||
              event.key === '-' ||
              Number(event.key) < Number('0')) &&
            event.preventDefault()
          }
          endAdornment={endAdornment}
        />
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  )
}

const BootstrapInput = styled(InputBase)(({ theme }) =>
  createStyles({
    'label + &': {
      marginTop: theme.spacing(1.5)
    },
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
    backgroundColor: theme.palette.common.white,
    '&.Mui-focused': {
      // boxShadow: `${alpha('#01a0b3', 0.25)} 0 0 0 0.1rem`,
      border: 'solid 1px #01a0b3'
    },
    '& .MuiInputAdornment-positionEnd .MuiIconButton-edgeEnd': {
      marginRight: '0px'
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      fontSize: 16,
      padding: '12px 12px',
      // minWidth: '250px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      '&:disabled': {
        borderColor: 'rgba(0,0,0, 0.1)',
        cursor: 'not-allowed'
      }
    }
  })
)

export default DojimaTextfield
