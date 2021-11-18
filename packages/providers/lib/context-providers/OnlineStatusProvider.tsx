import { createContext, useEffect, useState } from 'react'
import { ChildrenType } from '@dojima-ui/types'
import React from 'react'
const getOnLineStatus = () =>
  typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true

export const OnlineStatusContext = createContext(getOnLineStatus())

export function OnlineStatusProvider(props: ChildrenType) {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(getOnLineStatus())

  const updateNetwork = () => {
    setOnlineStatus(window.navigator.onLine)
  }

  useEffect(() => {
    window.addEventListener('online', updateNetwork)

    window.addEventListener('offline', updateNetwork)

    return () => {
      window.removeEventListener('offline', updateNetwork)

      window.removeEventListener('online', updateNetwork)
    }
  }, [])

  return (
    <OnlineStatusContext.Provider value={onlineStatus}>
      {props.children}
    </OnlineStatusContext.Provider>
  )
}
