import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from '@dojima-ui/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root')
)
