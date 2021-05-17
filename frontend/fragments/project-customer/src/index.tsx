import React               from 'react'
import { useIntl }         from 'react-intl'

import { ProjectCustomer } from './ProjectCustomer'

export default (data) => {
  const intl = useIntl()

  return <ProjectCustomer intl={intl} {...data} />
}
