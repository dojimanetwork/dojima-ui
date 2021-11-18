import { useEffect, useState } from 'react'
import useWindowSize from './useWindowSize'

export default function useAnimateHeight() {
  const size = useWindowSize()
  const [height, setHeight] = useState<string | number>('auto')
  useEffect(() => {
    setHeight('auto')
  }, [size])

  const handleAnimate = () => {
    setHeight((height) => (height === 0 ? 'auto' : 0))
  }

  return { height, handleAnimate }
}
