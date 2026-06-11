import { useIntl } from 'react-intl'
import React       from 'react'

import { Login }   from './Login.js'

const Fragment = () => {
  const intl = useIntl()

  return <Login intl={intl} />
}

export default Fragment
