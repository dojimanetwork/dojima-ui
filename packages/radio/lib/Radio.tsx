import React from 'react'
import RadioMui from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabelMui from '@mui/material/FormControlLabel'
import FormControlMui from '@mui/material/FormControl'
import FormLabelMui from '@mui/material/FormLabel'
import { FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { FieldArray, FieldArrayRenderProps } from 'formik'
import { RadioComponentProps } from '@dojima-ui/types'

function DojimaRadioGroup(
  props: RadioComponentProps
): React.MemoExoticComponent<() => JSX.Element> | any {
  const {
    label,
    options,
    onChange,
    value,
    horizontal,
    radioSize,
    id,
    name,
    error,
    helperText,
    selectionType = 'single',
    className,
    disable
  } = props
  const classes = MuiStyles()

  const handleArrayChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    arrayHelpers: FieldArrayRenderProps
  ) => {
    const value = event.target.value
    arrayHelpers.remove(0)
    arrayHelpers.insert(0, value)
  }

  if (selectionType === 'single')
    return (
      <FormControlMui component='fieldset'>
        <FormLabelMui component='legend'>{label}</FormLabelMui>
        <RadioGroup row={horizontal ?? true} value={value} onChange={onChange}>
          {options.map((option, index) => (
            <FormControlLabelMui
              value={option}
              control={
                <RadioMui 
                    disabled={disable} 
                    className={classes.root} 
                    size={radioSize ?? 'small'} 
                />
              }
              label={option}
              key={option + index}
              id={id}
              name={name}
              className={className}
            />
          ))}
        </RadioGroup>
        {error && (
          <FormHelperText className={classes.helperText}>
            {helperText}
          </FormHelperText>
        )}
      </FormControlMui>
    )
  else if (selectionType === 'multiple')
    return (
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <FormControlMui component='fieldset'>
            <FormLabelMui component='legend'>{label}</FormLabelMui>
            <RadioGroup
              row={horizontal ?? true}
              value={value ?? null}
              name={name}
              onChange={(e) => handleArrayChange(e, arrayHelpers)}
            >
              {options.map((option, index) => (
                <FormControlLabelMui
                  value={option}
                  control={
                    <RadioMui 
                        disabled={disable} 
                        className={classes.root} 
                        size={radioSize ?? 'small'} 
                    />}
                  label={option}
                  key={option + index}
                  id={id}
                  className={className}
                />
              ))}
            </RadioGroup>
            {error && (
              <FormHelperText className={classes.helperText}>
                {helperText}
              </FormHelperText>
            )}
          </FormControlMui>
        )}
      />
    )
}

const MuiStyles = makeStyles(() => ({
  helperText: { color: 'red' },
  root: {
    width: '1.5rem',
    height: '1.5rem',
    padding: '0.388rem 0.388rem 0.388rem 0.388rem',
    borderRadius: '0.75rem',
    boxShadow: '0.375rem 0.375rem 0.75rem 0 rgba(0, 0, 0, 0.16), -0.375rem -0.375rem 0.75rem 0 rgba(255, 255, 255, 0.04)',
    border: 'solid 0.063rem rgba(0, 0, 0, 0.08)',
    backgroundImage: 'linear-gradient(122deg, rgba(0, 0, 0, 0) 8%, #000 89%), linear-gradient(to bottom, black, black)',
    '& .MuiSvgIcon-root': {
      width: '0.719rem',
      height: '0.719rem',
      borderRadius: '0.75rem',
      boxShadow: 'inset 0.125rem 0.125rem 0.188rem 0 rgba(0, 0, 0, 0.15), inset -0.125rem -0.125rem 0.25px 0 rgba(255, 255, 255, 0.21)',
      backgroundColor: '#8c8e8f',
      fill: '#8c8e8f',
    },
    '&.Mui-checked': {
      '& .MuiSvgIcon-root': {
        backgroundColor: '#e1aa75',
        fill: '#e1aa75',
      },
    },
    '&.Mui-disabled': {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  }
}))

export default DojimaRadioGroup
