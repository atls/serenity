/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  csrfToken: '',
  identifier: '',
  password: '',
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === 'RESET') {
    return initialState
  }

  return state
}

export const useLogin = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeCsrfToken = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'csrfToken', value }),
    []
  )

  const onChangeIdentifier = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'identifier', value }),
    []
  )

  const onChangePassword = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'password', value }),
    []
  )

  const onSignIn = useCallback(
    (event) => {
      Object.keys(state).forEach((key) => {
        const hiddenInput = document.createElement('input')
        hiddenInput.type = 'hidden'
        hiddenInput.name = key === 'csrfToken' ? 'csrf_token' : key
        hiddenInput.value = state[key]
        event.target.appendChild(hiddenInput)
      })
    },
    [state]
  )

  return {
    ...state,
    onChangeCsrfToken,
    onChangeIdentifier,
    onChangePassword,
    onSignIn,
  }
}
