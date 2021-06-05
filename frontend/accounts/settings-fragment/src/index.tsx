import React           from 'react'
import { useIntl }     from 'react-intl'

import { Settings }    from './Settings'
import { useSettings } from './useSettings'

export default () => {
  const intl = useIntl()
  const data = useSettings()

  return <Settings intl={intl} {...data} />
}
