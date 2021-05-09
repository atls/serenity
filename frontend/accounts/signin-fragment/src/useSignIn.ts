/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  email: '',
  password: '',
  errors: {},
}

const redirectTo = (body: any) => body.body.redirectTo

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

export const useSignIn = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeEmail = useCallback(
    value => dispatch({ type: 'CHANGE', field: 'email', value }),
    [],
  )

  const onChangePassword = useCallback(
    value => dispatch({ type: 'CHANGE', field: 'password', value }),
    [],
  )

  const onSignIn = useCallback(async () => {
    const url = window.location.href.replace(window.location.origin, '')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })

    const body = await response.json()

    if (body.errors) {
      dispatch({ type: 'SET_ERRORS', errors: body.errors })
    } else if (redirectTo(body)) {
      window.location.href = redirectTo(body)
    }
  }, [state])

  return {
    ...state,
    onChangeEmail,
    onChangePassword,
    onSignIn,
  }
}
