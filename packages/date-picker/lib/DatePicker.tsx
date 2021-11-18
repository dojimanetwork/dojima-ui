import React from 'react'
import DateFnsUtils from '@date-io/moment'
import { DatePickerComponentProps } from '@dojima-ui/types'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import {
  createStyles,
  FormControl,
  FormHelperText,
  Grid,
  InputBase,
  InputLabel,
  TextFieldProps
} from '@mui/material'
import { useField, useFormikContext } from 'formik'
import { styled } from '@mui/material/styles'

function DojimaDatePicker(props: DatePickerComponentProps) {
  const {
    label,
    name,
    value,
    error,
    helperText,
    fullWidth,
    lg,
    md,
    xl,
    xs,
    maxDate,
    minDate,
    disable
  } = props

  const { setFieldValue } = useFormikContext()
  const [field] = useField(name)
  const renderInput = (props: TextFieldProps): any => (
    <BootstrapInput
      type='text'
      inputRef={props.inputRef}
      // inputProps={props.inputProps}
      value={props.value}
      onClick={props.onClick}
      onChange={props.onChange}
      endAdornment={props.InputProps?.endAdornment}
      inputProps={{
        min: minDate,
        max: maxDate
      }}
    />
  )
  return (
    <Grid
      item
      xs={xs ?? false}
      md={md ?? false}
      xl={xl ?? false}
      lg={lg ?? false}
    >
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <FormControl
          // variant={variant ?? 'outlined'}
          // className={classes.formControl}
          fullWidth={fullWidth ?? false}
          error={error}
          disabled={disable}
        >
          <InputLabel shrink htmlFor={name}>
            {label}
          </InputLabel>
          <DatePicker
            // disableToolbar
            // fullWidth={fullWidth ?? false}
            // variant="dialog"
            views={['year']}
            // format={dateFormat ?? 'dd/MM/yyyy'}
            // inputVariant="outlined"
            // label={label}
            value={value}
            // name={name}
            renderInput={renderInput}
            onChange={(e: any) => setFieldValue(field.name, e._d)}
            minDate={minDate}
            maxDate={maxDate}
            // error={error}
            // helperText={helperText}
            // keyboardIcon={<TodayIcon style={{ color: Cgreen }} />}
          />
          {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      </LocalizationProvider>
    </Grid>
  )
}

const BootstrapInput = styled(InputBase)(({ theme }) =>
  createStyles({
    'label + &': {
      marginTop: theme.spacing(2.5)
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

export default DojimaDatePicker
