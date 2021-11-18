import { useLayoutEffect, useState } from 'react'
import debounce from 'lodash/debounce'

// Define general type for useWindowSize hook, which includes width and height
export interface WindowSize {
  width: number | undefined
  height: number | undefined
}

function useWindowSize() {
  const [size, setSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  })

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    //debounce for optimization
    window.addEventListener('resize', debounce(updateSize, 1000))
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

export default useWindowSize
