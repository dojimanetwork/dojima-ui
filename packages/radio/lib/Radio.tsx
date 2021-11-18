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
    horiontal,
    radioSize,
    id,
    name,
    error,
    helperText,
    selectionType = 'single',
    className
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
        <FormLabelMui component='legend'>{label}</FormLabelMui>,
        <RadioGroup row={horiontal ?? true} value={value} onChange={onChange}>
          {options.map((option, index) => (
            <FormControlLabelMui
              value={option}
              control={<RadioMui size={radioSize ?? 'small'} />}
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
            <FormLabelMui component='legend'>{label}</FormLabelMui>,
            <RadioGroup
              row={horiontal ?? true}
              value={value ?? null}
              name={name}
              onChange={(e) => handleArrayChange(e, arrayHelpers)}
            >
              {options.map((option, index) => (
                <FormControlLabelMui
                  value={option}
                  control={<RadioMui size={radioSize ?? 'small'} />}
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
  helperText: { color: 'red' }
}))

export default DojimaRadioGroup
