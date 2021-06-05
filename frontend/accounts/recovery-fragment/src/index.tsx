import React           from 'react'
import { useIntl }     from 'react-intl'

import { Recovery }    from './Recovery'
import { useRecovery } from './useRecovery'

export default () => {
  const intl = useIntl()
  const data = useRecovery()

  return <Recovery intl={intl} {...data} />
}
