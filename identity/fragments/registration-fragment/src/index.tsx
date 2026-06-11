import { useIntl }      from 'react-intl'
import React            from 'react'

import { Registration } from './Registration.js'

const Fragment = () => {
  const intl = useIntl()

  return <Registration intl={intl} />
}

export default Fragment
