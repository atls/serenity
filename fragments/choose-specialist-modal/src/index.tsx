import { useIntl }               from 'react-intl'
import React                     from 'react'

import { ChooseSpecialistModal } from './ChooseSpecialistModal'

const ChooseSpecialistModalFragment = (data) => {
  const intl = useIntl()

  return <ChooseSpecialistModal intl={intl} {...data} />
}

export default ChooseSpecialistModalFragment
