import React        from 'react'
import { useIntl }  from 'react-intl'

import { Recovery } from './Recovery'

const Fragment = () => {
  const intl = useIntl()

  return <Recovery intl={intl} />
}

export default Fragment
