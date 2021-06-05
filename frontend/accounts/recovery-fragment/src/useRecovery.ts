/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  csrfToken: '',
  email: '',
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

export const useRecovery = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeCsrfToken = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'csrfToken', value }),
    []
  )

  const onChangeEmail = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'email', value }),
    []
  )

  const onReset = useCallback(
    (event) => {
      Object.keys(state).forEach((key) => {
        const hiddenInput = document.createElement('input')
        hiddenInput.type = 'hidden'
        hiddenInput.name = key !== 'csrfToken' ? `traits.${key}` : key
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
    onReset,
  }
}
