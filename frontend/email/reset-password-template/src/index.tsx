import React        from 'react'
import { useIntl }  from 'react-intl'

import { Template } from './Template'

export default ({ url }) => {
  const data = url.query || {}
  const intl = useIntl()

  const link = `${process.env.ACCOUNTS_URL}/change-password/${data.resetToken}`

  return <Template {...data} link={link} intl={intl} />
}
