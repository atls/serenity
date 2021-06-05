/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  csrfToken: '',
  password: '',
  confirmPassword: '',
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === 'Change') {
    return initialState
  }

  return state
}

export const useSettings = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeCsrfToken = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'csrfToken', value }),
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

  const onChange = useCallback(
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
    onChangePassword,
    onChangeConfirmPassword,
    onChange,
  }
}
