import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

type EmptyParam = () => void

export type statusCode = 'success' | 'error' | 'warning' | 'info'

export interface SnackbarContextIfc {
  success: boolean
  handleSuccess: EmptyParam
  error: boolean
  handleError: EmptyParam
  warning: boolean
  handleWarning: EmptyParam
  info: boolean
  handleInfo: EmptyParam
  message: string | undefined
  handleMessage: (message: string) => void
  DisplayMessage: (statusCode: statusCode, message: string) => void
}

export const SnackbarContext = createContext<SnackbarContextIfc>({
  success: false,
  error: false,
  warning: false,
  info: false,
  message: undefined,
  handleSuccess: () => {},
  handleError: () => {},
  handleWarning: () => {},
  handleInfo: () => {},
  handleMessage: () => {},
  DisplayMessage: () => {}
})

function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [warning, setWarning] = useState<boolean>(false)
  const [info, setInfo] = useState<boolean>(false)
  const [message, setMessage] = useState<string | undefined>(undefined)

  const handleSuccess = () => setSuccess((prev) => !prev)
  const handleError = () => setError((prev) => !prev)
  const handleWarning = () => setWarning((prev) => !prev)
  const handleInfo = () => setInfo((prev) => !prev)
  const handleMessage = (msg: string) => setMessage(msg)

  const handleSetMessage = (msg: string, type: statusCode) => {
    handleMessage(msg)
    switch (type) {
      case 'success':
        return handleSuccess()
      case 'error':
        return handleError()
      case 'info':
        return handleInfo()
      case 'warning':
        return handleWarning()
      default:
        return handleError()
    }
  }

  function DisplayMessage(statusCode: statusCode, message: string) {
    handleSetMessage(message, statusCode)
  }

  return (
    <SnackbarContext.Provider
      value={{
        success,
        error,
        warning,
        info,
        message,
        handleSuccess,
        handleError,
        handleInfo,
        handleWarning,
        handleMessage,
        DisplayMessage
      }}
    >
      {children}
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider
