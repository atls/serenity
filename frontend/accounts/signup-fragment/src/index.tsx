import React         from 'react'
import { useIntl }   from 'react-intl'

import { SignUp }    from './SignUp'
import { useSignUp } from './useSignUp'

export default () => {
  const intl = useIntl()
  const data = useSignUp()

  return <SignUp intl={intl} {...data} />
}
