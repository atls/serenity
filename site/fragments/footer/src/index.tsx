import { useIntl } from 'react-intl'
import React       from 'react'

import { Footer }  from './Footer.js'

const FooterFragment = () => {
  const intl = useIntl()

  return <Footer intl={intl} />
}

export default FooterFragment
