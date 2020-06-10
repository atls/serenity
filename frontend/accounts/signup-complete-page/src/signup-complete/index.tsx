import React              from 'react'
import { useIntl }        from 'react-intl'

import { SignUpComplete } from './SignUpComplete'

export default (props: any) => {
  const intl = useIntl()

  return <SignUpComplete intl={intl} {...props} />
}
