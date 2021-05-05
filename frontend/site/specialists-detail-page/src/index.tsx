import React                     from 'react'
import { useRouter }             from 'next/router'

import { Seo }                   from './Seo'
import { SpecialistsDetailPage } from './SpecialistsDetailPage'
import { useData }               from './useData'

export default () => {
  const router = useRouter()
  const id = (router && router.query && router.query.id) || null
  const specialist = useData(id)

  return (
    <>
      <Seo />
      <SpecialistsDetailPage specialist={specialist} />
    </>
  )
}
