import { Dispatch, SetStateAction, useCallback, useState } from 'react'
// Hook
// Parameter is the boolean, with default "false" value
function useToggle(
  initialState = false
): [boolean, (val?: boolean) => void, Dispatch<SetStateAction<boolean>>] {
  // Initialize the state
  const [state, setState] = useState(initialState)

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((val?: boolean) => setState((state) => val ?? !state), [])

  return [state, toggle, setState]
}

export default useToggle
