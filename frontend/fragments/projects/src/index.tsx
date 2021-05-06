import React, { useState } from 'react'
import { useIntl }         from 'react-intl'

import { Projects }        from './Projects'
import { useData }         from './useData'

const ProjectsFragment = ({ activeCategory = '' }) => {
  const [query, onSearch] = useState('')
  const intl = useIntl()
  const data = useData(query, activeCategory)

  return <Projects intl={intl} projects={data} onSearch={onSearch} />
}


export default ProjectsFragment
