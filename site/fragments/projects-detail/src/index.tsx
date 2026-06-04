import { useIntl }        from 'react-intl'
import React              from 'react'

import { ProjectsDetail } from './ProjectsDetail'

const ProjectsDetailFragment = (data) => {
  const intl = useIntl()

  return <ProjectsDetail intl={intl} {...data} />
}

export default ProjectsDetailFragment
