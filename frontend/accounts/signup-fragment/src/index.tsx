import React         from 'react'
import { useIntl }   from 'react-intl'

import { SignUp }    from './SignUp'
import { useSignUp } from './useSignUp'

const SignUpFragment = () => {
  const intl = useIntl()
  const data = useSignUp()

  return <SignUp intl={intl} {...data} />
}

export default SignUpFragment
