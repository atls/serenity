import React         from 'react'
import { useIntl }   from 'react-intl'

import { SignIn }    from './SignIn'
import { useSignIn } from './useSignIn'

export default () => {
  const intl = useIntl()
  const data = useSignIn()

  return <SignIn intl={intl} {...data} />
}
