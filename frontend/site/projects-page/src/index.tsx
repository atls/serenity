import React, { useState } from 'react'
import { useRouter }       from 'next/router'
import { useIntl }         from 'react-intl'

import { ProjectsPage }    from './ProjectsPage'
import { Seo }             from './Seo'

export default () => {
  const intl = useIntl()
  const router = useRouter()
  const defaultCategory = (router && router.query && router.query.catId) || ''
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const selectCategory = id => {
    if (typeof window !== 'undefined') {
      setActiveCategory(id)
      window.history.replaceState({ catId: id }, null, `/projects?catId=${[id]}`)
    }
  }

  return (
    <>
      <Seo />
      <ProjectsPage intl={intl} activeCategory={activeCategory} selectCategory={selectCategory} />
    </>
  )
}
