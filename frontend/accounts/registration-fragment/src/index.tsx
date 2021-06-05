import React               from 'react'
import { useIntl }         from 'react-intl'

import { Registration }    from './Registration'
import { useRegistration } from './useRegistration'

export default () => {
  const intl = useIntl()
  const data = useRegistration()

  return <Registration intl={intl} {...data} />
}
