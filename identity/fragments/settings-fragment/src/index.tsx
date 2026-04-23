import { useIntl }  from 'react-intl'
import React        from 'react'

import { Settings } from './Settings'

const SettingsFragment = () => {
  const intl = useIntl()

  return <Settings intl={intl} />
}

export default SettingsFragment
