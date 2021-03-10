import React              from 'react'
import { useIntl }        from 'react-intl'

import { ProjectsDetail } from './ProjectsDetail'

export default data => {
  const intl = useIntl()

  return <ProjectsDetail intl={intl} {...data} />
}
