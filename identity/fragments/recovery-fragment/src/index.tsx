import { useIntl }  from 'react-intl'
import React        from 'react'

import { Recovery } from './Recovery'

const Fragment = () => {
  const intl = useIntl()

  return <Recovery intl={intl} />
}

export default Fragment
