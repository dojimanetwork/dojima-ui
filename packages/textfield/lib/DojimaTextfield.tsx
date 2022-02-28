import {
    createStyles,
    FormControl,
    FormHelperText,
    Grid,
    InputBase
  } from '@mui/material'
  import React from 'react'
  import { styled } from '@mui/material/styles'
  import { makeStyles } from '@mui/styles';
  import { TextfieldComponentProps } from '@dojima-ui/types';
  
  const useStyles = makeStyles(() =>
    ({
      helpertext: {
        fontSize: '0.75rem',
        letterSpacing: '-0.015rem',
        "&.MuiFormHelperText-root.Mui-error": {
          color: '#de3f44',
        }
      }
    })
  );
  
  const CustomInput = styled(InputBase)(({ error }) =>
    createStyles({
      width: '18.25rem',
      height: '2.813rem',
      color: '#343739',       /* rgb(52,55,57,0.4) */
      padding: '0 0 0.563rem 1rem',
      borderBottom: '0.063rem solid',
      borderColor: error ? '#de3f44' : 'rgb(52,55,57,0.4)',
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.03rem',
      '&.Mui-focused': {
        color: '#cfd0d0',
        borderImageSource: 'linear-gradient(to right, #f81 -40%, #ff1267 214%)',
        borderImageSlice: 1,
      },
      input: {
        // Use the system font instead of the default Roboto font.
        '&:disabled': {
          color: '#cfd0d0',
          cursor: 'not-allowed'
        }
      }
    })
  )
  
  function DojimaTextfield(props: TextfieldComponentProps) {
    const {
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
      formControl,
      autoComplete
    } = props
  
    // const labelProps = !labelShrink ? null : { shrink: true };
    const classes = useStyles();
  
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
          <CustomInput
          autoComplete={autoComplete}
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
          {error && <FormHelperText className={classes.helpertext}>{helperText}</FormHelperText>}
        </FormControl>
      </Grid>
    )
  }
  
  export default DojimaTextfield
  