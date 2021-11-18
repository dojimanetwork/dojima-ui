import React from 'react'
import { createStyles } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import { Grid, InputBase, MenuItem, Select } from '@mui/material'
import { isNumber } from 'lodash'
import { ChildrenType, SelectComponentProps } from '@dojima-ui/types'
import { styled } from '@mui/material/styles'

const usePlaceholderStyles = makeStyles(() => ({
  placeholder: {
    color: '#aaa'
  }
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
          input={<BootstrapInput />}
          renderValue={() =>
            value && (value.length > 0 || isNumber(value)) ? (
              value
            ) : (
              <Placeholder>{placeholder}</Placeholder>
            )
          }
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
              <MenuItem value={option} key={id + option + index}>
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

const BootstrapInput = styled(InputBase)(({ theme }) =>
  createStyles({
    'label + &': {
      marginTop: theme.spacing(2.5)
    },
    '& .MuiSelect-icon': {
      color: '#3788e4'
      // marginRight: '1rem'
    },
    '& .MuiNativeSelect-icon.Mui-disabled': {
      color: 'rgba(0,0,0, 0.1)'
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid rgba(0, 0, 0, 0.05)',
      fontSize: 16,
      // padding: "10px 26px 10px 12px",
      padding: '12px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      '&:focus': {
        borderRadius: 8,
        borderColor: 'solid 1px #01a0b3'
      },
      '&:disabled': {
        borderColor: 'rgba(0,0,0, 0.1)',
        cursor: 'not-allowed'
      }
    }
  })
)
