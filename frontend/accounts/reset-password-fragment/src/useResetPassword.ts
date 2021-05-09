/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  email: '',
  errors: {},
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === 'SET_ERRORS') {
    return {
      ...state,
      errors: action.errors,
    }
  } else if (action.type === 'RESET') {
    return initialState
  }

  return state
}

export const useResetPassword = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeEmail = useCallback(
    value => dispatch({ type: 'CHANGE', field: 'email', value }),
    [],
  )

  const onReset = useCallback(async () => {
    const url = window.location.href.replace(window.location.origin, '')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
      }),
    })

    const body = await response.json()

    if (body.errors) {
      dispatch({ type: 'SET_ERRORS', errors: body.errors })
    } else {
      window.location.href = '/reset-password/complete'
    }
  }, [state])

  return {
    ...state,
    onChangeEmail,
    onReset,
  }
}
