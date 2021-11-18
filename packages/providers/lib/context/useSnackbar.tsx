import { useContext } from 'react'
import { SnackbarContext } from '../context-providers/SnackbarProvider'

function useSnackbar() {
  const {
    error,
    handleError,
    handleInfo,
    handleSuccess,
    handleWarning,
    info,
    success,
    warning,
    message,
    handleMessage,
    DisplayMessage
  } = useContext(SnackbarContext)
  return {
    error,
    info,
    success,
    warning,
    handleError,
    handleInfo,
    handleSuccess,
    handleWarning,
    message,
    handleMessage,
    DisplayMessage
  }
}

export default useSnackbar
