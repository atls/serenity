import React       from 'react'
import { useIntl } from 'react-intl'

import { Footer }  from './Footer'

export default () => {
  const intl = useIntl()

  return <Footer intl={intl} />
}
