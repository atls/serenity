import React, { useState } from 'react'
import { useRouter }       from 'next/router'
import { useIntl }         from 'react-intl'

import { useChat }         from '@ui/chat'

import { Specialists }     from './Specialists'
import { useData }         from './useData'

const SpecialistsFragment = ({ activeCategory = '' }) => {
  const router = useRouter()
  const searchDefaultValue = (router && router.query && router.query.q) || ''
  const [query, onSearch] = useState(searchDefaultValue)
  const intl = useIntl()
  const data = useData(query, activeCategory)
  const { openChat } = useChat('chat')

  return (
    <Specialists
      intl={intl}
      specialists={data}
      onSearch={onSearch}
      searchDefaultValue={searchDefaultValue}
      onContact={openChat}
    />
  )
}

export default SpecialistsFragment
