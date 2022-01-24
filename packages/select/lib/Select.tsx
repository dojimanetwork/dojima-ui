import React from 'react'
import { makeStyles } from '@mui/styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { Grid, InputBase, MenuItem, Select } from '@mui/material'
import { isNumber } from 'lodash'
import { ChildrenType, SelectComponentProps } from '@dojima-ui/types'

const MenuProps = {
  PaperProps: {
    style: {
      borderRadius: '12px',
      boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 0 rgba(0, 0, 0, 0.12), 0 8px 10px 0 rgba(0, 0, 0, 0.14)',
      backgroundColor: '#1f2123',
      color: '#4b4e4f',
      width: '10.2rem',
      marginTop: '17px',
      maxHeight: '225px',
    },
    sx: {
      "& .MuiMenuItem-root:hover": {
        backgroundColor: '#3c3e40',
      },
    }
  },
};

const usePlaceholderStyles = makeStyles(() => ({
  select: {
    '&.MuiInputBase-root': {
      color:'#ffa651',
      letterSpacing: '-0.02rem',
      textAlign: 'left',
      backgroundColor: '#212426',
      width: '10.2rem',
      height: '3.5rem',
      borderRadius: '0.75rem',
      padding: '1rem 1.25rem',
      boxShadow: '0.375rem 0.375rem 0.75rem 0 rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0 rgba(255, 255, 255, 0.04)',
      border: 'solid 0.125rem rgba(0, 0, 0, 0.08)',
      borderImage: 'linear-gradient(101deg, rgba(0, 0, 0, 0) 3%, #000 95%), linear-gradient(to bottom, #212426, #212426)',
    },
    '& .MuiSvgIcon-root': {
      color:'#ffa651',
    },
  },
  placeholder: {
    color:'#ffa651',
  },
}))

const Placeholder = ({ children }: ChildrenType) => {
  const classes = usePlaceholderStyles()
  return <div className={classes.placeholder}>{children}</div>
}

function DojimaSelect(props: SelectComponentProps) {
  const {
    handleChange,
    label,
    options,
    name,
    required,
    value,
    lg,
    md,
    xl,
    xs,
    fullWidth,
    justifyContent,
    handleBlur,
    error,
    helperText,
    id,
    type,
    emptyValueLabel,
    disable,
    placeholder,
    className
  } = props
  const classes = usePlaceholderStyles();
  return (
    <Grid
      item
      container
      xs={xs ?? 11}
      md={md ?? false}
      lg={lg ?? false}
      xl={xl ?? false}
      justifyContent={justifyContent}
    >
      <FormControl
        // variant={variant ?? 'outlined'}
        className={className}
        fullWidth={fullWidth ?? false}
        error={error}
        disabled={disable}
        sx={{ m: 1}}
      >
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required ?? true}
          name={name}
          error={error}
          displayEmpty
          className={classes.select}
          input={<InputBase/>}
          renderValue={() =>
            value && (value.length > 0 || isNumber(value)) ? (
              value
            ) : (
              <Placeholder >{placeholder}</Placeholder>
            )
          }
          MenuProps={MenuProps}
        >
          {type === 'string' ? (
            <MenuItem value='' key={`${id}${label}null`} disabled>
              {emptyValueLabel ?? placeholder} 
            </MenuItem>
          ) : (
            <MenuItem value={0} key={`${id}${label}null`} disabled>
              {emptyValueLabel ?? placeholder}
            </MenuItem>
          )}
          {options &&
            options.map((option: string, index: number) => (
              <MenuItem 
                value={option} 
                key={id + option + index}
              >
                {option}
              </MenuItem>
            ))}
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  )
}

export default DojimaSelect