import React                                          from 'react'
import { useRouter }                                  from 'next/router'

import { Seo }                                        from './Seo'
import { SpecialistsDetailPage as SpecialistsDetail } from './SpecialistsDetailPage'
import { useData }                                    from './useData'

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
