import { useIntl }              from 'react-intl'
import React                    from 'react'

import { RegistrationComplete } from './RegistrationComplete'

const Page = (props: any) => {
  const intl = useIntl()

  return <RegistrationComplete intl={intl} {...props} />
}

export default Page
