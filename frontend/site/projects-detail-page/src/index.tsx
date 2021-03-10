import React                               from 'react'
import { useUser }                         from '@atlantis-lab/react-user'
import { useRouter }                       from 'next/router'

import { ProjectsDetailPage }              from './ProjectsDetailPage'
import { Seo }                             from './Seo'
import { Track }                           from './Track'
import { useDataProjects, useDataReplies } from './useData'

export default () => {
  const router = useRouter()
  const user = useUser()
  const id = (router && router.query && router.query.id) || null
  const project = useDataProjects(id)
  const replies = user ? useDataReplies(id) : {}

  return (
    <>
      <Seo />
      <ProjectsDetailPage project={project} id={id} replies={replies} />
      <Track id={id} />
    </>
  )
}
