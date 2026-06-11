import { useIntl }          from 'react-intl'
import React                from 'react'

import { RecoveryComplete } from './RecoveryComplete.js'

const Page = (props: any) => {
  const intl = useIntl()

  return <RecoveryComplete intl={intl} {...props} />
}

export default Page
