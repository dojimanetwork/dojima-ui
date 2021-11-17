import { createTheme, colors } from '@mui/material'
import MuiTypography from './typography'
import MuiShadows from './shadows'
import grey from '@mui/material/colors/grey'
import {
  black,
  white,
  primaryDark,
  primaryLight,
  primaryMain,
  commonLightGreen,
  commonGreen,
  secondaryDark,
  secondaryLight,
  secondaryMain,
  buttonHoverColor
} from './colors'

const isDark = true

const StoryBookTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  direction: 'ltr',
  typography: {
    fontFamily: 'Poppins',
    // The default font size of the Material Specification.
    fontSize: 16, // px
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: 16,
    ...MuiTypography
  },
  shadows: MuiShadows,
  palette: {
    common: {
      black: black,
      white: white
    },
    mode: !isDark ? 'dark' : 'light',
    background: {
      // dark: isDark ? black : white,
      default: isDark ? white : colors.grey[900],
      paper: isDark ? white : colors.grey[800]
    },
    primary: {
      main: isDark ? primaryMain : black,
      light: isDark ? primaryLight : commonLightGreen,
      dark: isDark ? primaryDark : commonGreen,
      contrastText: isDark ? white : white
    },
    secondary: {
      main: isDark ? secondaryMain : white,
      light: isDark ? secondaryLight : white,
      dark: isDark ? secondaryDark : white,
      contrastText: isDark ? black : white
    },
    text: {
      primary: isDark ? '#17252A' : colors.lightGreen[500],
      secondary: isDark ? primaryMain : colors.lightGreen[500],
      disabled: isDark ? grey[600] : colors.lightGreen[900]
      // hint: isDark ? black : colors.lightGreen[900],
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: white
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: white
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  },
  shape: {
    borderRadius: 4
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root.Mui-disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundImage: grey[200]
          },
          fontSize: '0.9375rem'
        },
        contained: {
          '&:disabled': {
            backgroundImage: 'none'
          },
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        },
        outlined: {
          // background: white,
          // '&:hover':{
          //   backgroundColor: black
          // }
        },
        /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
        containedPrimary: {
          // minWidth: '18.75rem',
          // minHeight: '3.125rem',
          borderRadius: '0.5rem',
          fontSize: '0.9375rem',
          backgroundImage: 'linear-gradient(to left, #40cddf, #5e79e9)',
          '&:hover': {
            // color: white,
            // backgroundColor: buttonHover,
            // boxShadow:
            //   '0 1.1875rem 1.75rem 0 rgba(86, 86, 86, 0.2), 0 1rem 0.75rem 0 rgba(86, 86, 86, 0.18), 1rem 0 1rem 0 rgba(86, 86, 86, 0.18)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: buttonHoverColor,
              alignSelf: 'center'
            }
          },
          '@media (max-width: 1024px)': {
            fontSize: '0.9375rem',
            fontFamily: 'Poppins',
            borderRadius: '0.25rem'
          }
        },
        textPrimary: {
          color: primaryLight,
          '&:hover': {
            backgroundColor: 'transparent',
            // boxShadow:
            //   '0 1.1875rem 1.75rem 0 rgba(86, 86, 86, 0.2), 0 1rem 0.75rem 0 rgba(86, 86, 86, 0.18), 1rem 0 1rem 0 rgba(86, 86, 86, 0.18)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: buttonHoverColor,
              alignSelf: 'center'
            }
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.5)' // (default alpha is 0.38)
          },
          '@media (max-width: 1024px)': {
            '& .MuiFormLabel-root': {
              // lineHeight: 0,
              // fontSize: '0.625rem'
            },
            '& .MuiInputBase-root': {
              paddingRight: '0.2rem'
            }
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '0.9375rem',
          color: 'rgba(0, 0, 0, 0.8)'
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {},

        colorSecondary: {
          color: primaryLight,
          '&$checked': {
            color: primaryLight
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        colorSecondary: {
          color: primaryLight,
          '&$checked': {
            color: primaryLight
          }
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
          fontSize: '0.875rem'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&$disabled': {
            color: 'rgba(0,0,0,0.3)'
          }
        },
        outlined: {
          '&$shrink': {
            transform: 'translate(0px, -6px) scale(0.75)'
          }
        }
      }
    }
  }
})

export default StoryBookTheme
