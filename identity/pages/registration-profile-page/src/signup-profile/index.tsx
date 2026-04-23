import { useIntl }          from 'react-intl'
import React                from 'react'

import { SignUpProfile }    from './SignUpProfile'
import { useSignUpProfile } from './useSignUpProfile'

const Page = () => {
  const intl = useIntl()
  const data = useSignUpProfile()

  return <SignUpProfile intl={intl} {...data} />
}

export default Page
