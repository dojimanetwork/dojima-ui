import React from 'react'
import { createStyles, styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import SelectMui from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import {
  Checkbox,
  Chip,
  Grid,
  InputBase,
  ListItemText,
  MenuItem
} from '@mui/material'
import { ChildrenType, SelectComponentProps } from '@dojima-ui/types'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const CHIP_MAX_WIDTH = 100
const CHIP_ICON_WIDTH = 30

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      // width: 250,
    }
  }
}

const EllipsisText = (props: ChildrenType) => {
  const { children } = props

  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: CHIP_MAX_WIDTH - CHIP_ICON_WIDTH
      }}
    >
      {children}
    </div>
  )
}

const usePlaceholderStyles = makeStyles(() => ({
  placeholder: {
    color: '#aaa'
  }
}))

const Placeholder = ({ children }: ChildrenType) => {
  const classes = usePlaceholderStyles()
  return <div className={classes.placeholder}>{children}</div>
}

function DojimaSelectMultiple(props: SelectComponentProps) {
  const {
    handleChange,
    label,
    options,
    name,
    required,
    value,
    variant,
    lg,
    md,
    xl,
    xs,
    fullWidth,
    justifyContent,
    handleBlur,
    error,
    helperText,
    disable,
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
        variant={variant ?? 'outlined'}
        className={className}
        fullWidth={fullWidth ?? false}
        error={error}
        disabled={disable}
        required={required}
      >
        <InputLabel shrink htmlFor={name}>
          {label}
        </InputLabel>
        <SelectMui
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          multiple
          id={name}
          required={required ?? true}
          name={name}
          displayEmpty
          error={error}
          MenuProps={MenuProps}
          input={<BootstrapInput />}
          renderValue={(selected) => {
            const _selected: Array<string> = selected as string[]
            if (_selected.length === 0)
              return <Placeholder>Select atleast one value</Placeholder>
            else
              return (
                <div>
                  {(selected as string[]).map((value) => (
                    <Chip
                      size='small'
                      key={value}
                      label={<EllipsisText>{value}</EllipsisText>}
                    />
                  ))}
                </div>
              )
          }}
        >
          <MenuItem disabled value=''>
            Select atleast one value
          </MenuItem>
          {options &&
            options.map((option, index) => (
              <MenuItem key={option + index} value={option}>
                <Checkbox checked={value.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
        </SelectMui>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </Grid>
  )
}

export default DojimaSelectMultiple

const BootstrapInput = styled(InputBase)(({ theme }) =>
  createStyles({
    MuiInputLabel: {
      shrink: {
        outlined: {
          transform: 'translate(0px, -6px) scale(0.75)'
        }
      }
    },
    'label + &': {
      marginTop: theme.spacing(1.5)
    },
    '& .MuiSelect-icon': {
      color: '#3788e4'
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
      '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
        transform: 'translate(0px, -6px) scale(0.75)'
      }
    }
  })
)
