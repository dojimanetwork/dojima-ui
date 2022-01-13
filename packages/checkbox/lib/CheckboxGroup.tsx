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
//@ts-ignore
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';

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
    className,
    disable
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
                    className={classes.checkBox}
                    checkedIcon={<CheckTwoToneIcon/>}
                    disabled={disable}
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
  helperText: { color: 'red' },
  checkBox: {
    "&.MuiCheckbox-root": {
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0.375rem 0.375rem 0.75rem 0 rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0 rgba(255, 255, 255, 0.04)',
      border: 'solid 0.063rem rgba(0, 0, 0, 0.08)',
      backgroundImage: 'linear-gradient(122deg, rgba(0, 0, 0, 0) 8%, #000 89%), linear-gradient(to bottom, black, black)',
    },
    "& .MuiSvgIcon-root": {
      width: '1rem',
      height: '1rem',
      borderRadius: '0.313rem',
      boxShadow: 'inset 0.125rem 0.125rem 0.188rem 0 rgba(0, 0, 0, 0.15), inset -0.125rem -0.125rem 0.25rem 0 rgba(255, 255, 255, 0.21)',
      backgroundColor: '#8c8e8f',
      color: '#8c8e8f'
    },
    "&.Mui-checked": {
      "& .MuiSvgIcon-root": {
        width: '1rem',
        height: '1rem',
        borderRadius: '0.313rem',
        boxShadow: 'inset 0.125rem 0.125rem 0.188rem 0 rgba(0, 0, 0, 0.15), inset -0.125rem -0.125rem 0.25rem 0 rgba(255, 255, 255, 0.21)',
        backgroundColor: '#e1aa75',
        color: '#212426',
      },
    },
    "&.Mui-disabled": {
      opacity: 0.3,
      backgroundImage: 'linear-gradient(122deg, rgba(0, 0, 0, 0) 8%, #000 89%), linear-gradient(to bottom, #212426, #212426)',
      "& .MuiSvgIcon-root": {
        boxShadow: 'inset 0.125rem 0.125rem 0.188rem 0 rgba(0, 0, 0, 0.15), inset -0.125rem -0.125rem 0.25rem 0 rgba(255, 255, 255, 0.21)',
        backgroundColor: '#4b4e4f',
        color: '#4b4e4f',
      },
    }
  }
}))

export default DojimaCheckboxGroup
