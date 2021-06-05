/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  csrfToken: '',
  email: '',
  password: '',
  confirmPassword: '',
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

export const useRegistration = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeCsrfToken = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'csrfToken', value }),
    []
  )

  const onChangeEmail = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'email', value }),
    []
  )

  const onChangePassword = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'password', value }),
    []
  )

  const onChangeConfirmPassword = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'confirmPassword', value }),
    []
  )

  const onCreateAccount = useCallback(
    (event) => {
      Object.keys(state).forEach((key) => {
        const hiddenInput = document.createElement('input')
        hiddenInput.type = 'hidden'
        hiddenInput.name = key !== 'password' && key !== 'csrfToken' ? `traits.${key}` : key
        if (hiddenInput.name === 'csrfToken') hiddenInput.name = 'csrf_token'
        hiddenInput.value = state[key]
        event.target.appendChild(hiddenInput)
      })
    },
    [state]
  )

  return {
    ...state,
    onChangeCsrfToken,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onCreateAccount,
  }
}
