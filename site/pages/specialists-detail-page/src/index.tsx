import { useRouter }                                  from 'next/router'
import React                                          from 'react'

import { Seo }                                        from './Seo.js'
import { SpecialistsDetailPage as SpecialistsDetail } from './SpecialistsDetailPage.js'
import { useData }                                    from './useData.js'

const SpecialistsDetailPage = () => {
  const router = useRouter()
  const id = (router && router.query && router.query.id) || null
  const specialist = useData(id)

  return (
    <>
      <Seo />
      <SpecialistsDetail specialist={specialist} />
    </>
  )
}

export default SpecialistsDetailPage
