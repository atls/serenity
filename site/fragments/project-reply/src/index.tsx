import { useCallback }  from 'react'
import { useEffect }    from 'react'
import { useState }     from 'react'
import { useIntl }      from 'react-intl'
import React            from 'react'

import { ProjectReply } from './ProjectReply'
import { useCreate }    from './useCreate'

const ProjectReplyFragment = ({ id, replies, profile, status = '', ownerName = {} }) => {
  const intl = useIntl()
  const [activeFilter, setActiveFilter] = useState('')
  const { replies: dataReplies, ...data } = useCreate(id, replies)
  const [filteredReplies, setFilteredReplies] = useState([])

  useEffect(() => {
    setFilteredReplies(dataReplies)
  }, [dataReplies])

  let endpoint: string | null = null

  if (typeof window !== 'undefined') {
    endpoint = window.location.hostname.includes('atls.tech')
      ? 'serenity.atls.tech'
      : window.location.hostname
  }

  const localAuthBaseUrl =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.endsWith('.localhost'))
      ? `http://${window.location.hostname === '127.0.0.1' ? '127.0.0.1' : 'localhost'}:3002`
      : null

  const authBaseUrl = localAuthBaseUrl || `https://accounts.${endpoint}`

  const onRegistration = useCallback(() => {
    window.location.href = `${authBaseUrl}/signup`
  }, [authBaseUrl])

  const onLogin = useCallback(() => {
    window.location.href = `${authBaseUrl}/signin`
  }, [authBaseUrl])

  const onOpenSpecialist = useCallback(
    (specialistId) => {
      window.location.href = `https://${endpoint}/specialists/${specialistId}`
    },
    [endpoint]
  )

  const onFilterReplies = (filterName) => {
    if (filterName) {
      setFilteredReplies(replies.filter((reply) => reply.status === filterName))
      setActiveFilter(filterName)
    } else {
      setFilteredReplies(dataReplies)
      setActiveFilter('')
    }
  }

  return (
    <ProjectReply
      intl={intl}
      onRegistration={onRegistration}
      onLogin={onLogin}
      onOpenSpecialist={onOpenSpecialist}
      onFilterReplies={onFilterReplies}
      activeFilter={activeFilter}
      profile={profile}
      status={status}
      replies={filteredReplies}
      ownerName={ownerName}
      {...data}
    />
  )
}

export default ProjectReplyFragment
