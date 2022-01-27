import React       from 'react'
import { useIntl } from 'react-intl'

import { Footer }  from './Footer'

const FooterFragment = () => {
  const intl = useIntl()

  return <Footer intl={intl} />
}

export default FooterFragment
