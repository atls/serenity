import React                from 'react'
import { useIntl }          from 'react-intl'

import { ResetPassword }    from './ResetPassword'
import { useResetPassword } from './useResetPassword'

export default () => {
  const intl = useIntl()
  const data = useResetPassword()

  return <ResetPassword intl={intl} {...data} />
}
