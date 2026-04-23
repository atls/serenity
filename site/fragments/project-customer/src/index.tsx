import { useIntl }         from 'react-intl'
import React               from 'react'

import { ProjectCustomer } from './ProjectCustomer'

const ProjectCustomerFragment = (data) => {
  const intl = useIntl()

  return <ProjectCustomer intl={intl} {...data} />
}

export default ProjectCustomerFragment
