import React            from 'react'
import { useIntl }      from 'react-intl'

import { Registration } from './Registration'

const Fragment = () => {
  const intl = useIntl()

  return <Registration intl={intl} />
}

export default Fragment
