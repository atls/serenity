import React              from 'react'
import { useIntl }        from 'react-intl'

import { SignUpComplete } from './SignUpComplete'

const SignupCompleteFragment = (props: any) => {
  const intl = useIntl()

  return <SignUpComplete intl={intl} {...props} />
}

export default SignupCompleteFragment
