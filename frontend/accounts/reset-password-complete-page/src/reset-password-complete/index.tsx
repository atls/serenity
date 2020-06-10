import React                     from 'react'
import { useIntl }               from 'react-intl'

import { ResetPasswordComplete } from './ResetPasswordComplete'

export default (props: any) => {
  const intl = useIntl()

  return <ResetPasswordComplete intl={intl} {...props} />
}
