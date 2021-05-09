import React                 from 'react'
import { useIntl }           from 'react-intl'

import { ChangePassword }    from './ChangePassword'
import { useChangePassword } from './useChangePassword'

const ChangePasswordFragment = () => {
  const intl = useIntl()
  const data = useChangePassword()

  return <ChangePassword intl={intl} {...data} />
}

export default ChangePasswordFragment
