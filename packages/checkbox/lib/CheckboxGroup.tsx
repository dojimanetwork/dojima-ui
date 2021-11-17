import React from 'react'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Checkbox from '@mui/material/Checkbox'
import { nanoid } from 'nanoid'
import { FieldArray, FieldArrayRenderProps } from 'formik'
import { CheckboxGroupComponentProps } from '@dojima-ui/types'

function DojimaCheckboxGroup(props: CheckboxGroupComponentProps) {
  const {
    label,
    options,
    value,
    state,
    setState,
    horizontal,
    checkBoxSize,
    id,
    name,
    error,
    helperText,
    className
  } = props

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    arrayHelpers: FieldArrayRenderProps
  ) => {
    const name = event.target.name
    const checked = event.target.checked
    setState({
      ...state,
      [name]: checked
    })
    if (checked) arrayHelpers.push(name)
    else {
      const index = value.indexOf(name)
      arrayHelpers.remove(index)
    }
  }

  const classes = MuiStyles()

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <FormControl component='fieldset'>
          {label && <FormLabel component='legend'>{label}</FormLabel>}
          <FormGroup row={horizontal ?? true}>
            {options.map((option) => (
              <FormControlLabel
                control={
                  <Checkbox
                    key={nanoid()}
                    checked={Boolean(state[`${option}`])}
                    onChange={(e) => handleChange(e, arrayHelpers)}
                    name={option}
                    size={checkBoxSize ?? 'small'}
                  />
                }
                key={nanoid()}
                label={option}
                value={value}
                id={id}
                name={name}
                className={className}
              />
            ))}
          </FormGroup>
          {error && (
            <FormHelperText className={classes.helperText}>
              {helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  )
}

const MuiStyles = makeStyles(() => ({
  helperText: { color: 'red' }
}))

export default DojimaCheckboxGroup
