import { useContext } from 'react'
import { OnlineStatusContext } from '../context-providers/OnlineStatusProvider'

function useOnlineStatus() {
  const isOnline = useContext(OnlineStatusContext)
  return isOnline
}

export default useOnlineStatus
