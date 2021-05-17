import React                     from 'react'
import { useIntl }               from 'react-intl'

import { ChooseSpecialistModal } from './ChooseSpecialistModal'

export default (data) => {
  const intl = useIntl()

  return <ChooseSpecialistModal intl={intl} {...data} />
}
