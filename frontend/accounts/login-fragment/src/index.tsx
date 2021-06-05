import React        from 'react'
import { useIntl }  from 'react-intl'

import { Login }    from './Login'
import { useLogin } from './useLogin'

export default () => {
  const intl = useIntl()
  const data = useLogin()

  return <Login intl={intl} {...data} />
}
