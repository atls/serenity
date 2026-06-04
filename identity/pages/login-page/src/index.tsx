import { useCallback } from 'react'
import React           from 'react'

import { LoginPage }   from './LoginPage'
import { Seo }         from './Seo'

const resolveBackUrl = () => {
  const search = new URLSearchParams(window.location.search)
  const returnTo = search.get('return_to') || search.get('continue')

  if (returnTo) {
    try {
      const parsed = new URL(returnTo)

      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        return parsed.toString()
      }
    } catch (error) {
      if (returnTo.startsWith('/')) {
        return returnTo
      }
    }
  }

  const { hostname, origin } = window.location

  if (hostname === 'localhost') {
    return 'http://localhost:3000/'
  }

  if (hostname === '127.0.0.1') {
    return 'http://127.0.0.1:3000/'
  }

  return `${origin.replace('accounts.', '')}/`
}

const Page = () => {
  const onBack = useCallback(() => {
    window.location.href = resolveBackUrl()
  }, [])

  return (
    <>
      <Seo />
      <LoginPage onBack={onBack} />
    </>
  )
}

export default Page
