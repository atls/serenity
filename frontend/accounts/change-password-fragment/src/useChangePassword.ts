/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
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
  } else if (action.type === 'Change') {
    return initialState
  }

  return state
}

export const useChangePassword = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangePassword = useCallback(
    value => dispatch({ type: 'CHANGE', field: 'password', value }),
    []
  )

  const onChangeConfirmPassword = useCallback(
    value => dispatch({ type: 'CHANGE', field: 'confirmPassword', value }),
    []
  )

  const onChange = useCallback(async () => {
    const url = window.location.href.replace(window.location.origin, '')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: state.password,
        confirmPassword: state.confirmPassword,
      }),
    })

    const body = await response.json()

    if (body.errors) {
      dispatch({ type: 'SET_ERRORS', errors: body.errors })
    } else {
      const { redirect_to } = body

      window.location.href = redirect_to
    }
  }, [state])

  return {
    ...state,
    onChangePassword,
    onChangeConfirmPassword,
    onChange,
  }
}
