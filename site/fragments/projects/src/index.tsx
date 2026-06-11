import { useState } from 'react'
import { useIntl }  from 'react-intl'
import React        from 'react'

import { Projects } from './Projects.js'
import { useData }  from './useData.js'

const ProjectsFragment = ({ activeCategory = '' }) => {
  const [query, onSearch] = useState('')
  const intl = useIntl()
  const data = useData(query, activeCategory)

  return <Projects intl={intl} projects={data} onSearch={onSearch} />
}

export default ProjectsFragment
