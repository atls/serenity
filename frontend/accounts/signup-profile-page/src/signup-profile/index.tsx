import React                from 'react'
import { useIntl }          from 'react-intl'

import { SignUpProfile as SignupProfilePart }    from './SignUpProfile'
import { useSignUpProfile } from './useSignUpProfile'

const SignUpProfile = () => {
  const intl = useIntl()
  const data = useSignUpProfile()

  return <SignupProfilePart intl={intl} {...data} />
}

export default SignUpProfile
