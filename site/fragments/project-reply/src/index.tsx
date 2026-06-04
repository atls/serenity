import { useCallback }  from 'react'
import { useEffect }    from 'react'
import { useState }     from 'react'
import { useIntl }      from 'react-intl'
import React            from 'react'

import { ProjectReply } from './ProjectReply'
import { useCreate }    from './useCreate'

const TRAEFIK_LOCAL_PORTS = ['18880', '18443']

const resolveLocalAuthBaseUrl = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const { hostname, port, protocol } = window.location

  if (hostname === '127.0.0.1') {
    return 'http://127.0.0.1:3002'
  }

  if (hostname === 'localhost') {
    const authProtocol = protocol === 'https:' ? 'https' : 'http'
    const authPort = TRAEFIK_LOCAL_PORTS.includes(port) ? `:${port}` : ':3002'

    return `${authProtocol}://localhost${authPort}`
  }

  if (hostname.endsWith('.localhost')) {
    const authProtocol = protocol === 'https:' ? 'https' : 'http'
    const authPort = port ? `:${port}` : ''

    return `${authProtocol}://accounts.localhost${authPort}`
  }

  return null
}

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

  const localAuthBaseUrl = resolveLocalAuthBaseUrl()

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
