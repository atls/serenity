import { useUser }     from '@atls/react-user'
import { useCallback } from 'react'
import { useIntl }     from 'react-intl'
import React           from 'react'

import { useDrawer }   from '@ui/drawer'

import { Navigation }  from './Navigation'
import { useProfile }  from './useProfile'

const NavigationFragment = () => {
  const user = useUser()

  const { visible: visibleMenu, open: openMenu, close: closeMenu } = useDrawer('menu')
  const { visible: visibleCatalog, open: openCatalog, close: closeCatalog } = useDrawer('catalog')

  const intl = useIntl()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const profile = user ? useProfile() : {}

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

  const onLogin = useCallback(() => {
    window.location.href = `${authBaseUrl}/signin?continue=${window.location.href}`
  }, [authBaseUrl])

  const onLogout = useCallback(() => {
    const continueUrl = `${window.location.origin}/`

    window.location.href = `${authBaseUrl}/signout?continue=${continueUrl}`
  }, [authBaseUrl])

  const onOpenSettings = useCallback(() => {
    if (localAuthBaseUrl) {
      window.location.href = `${localAuthBaseUrl}/profile/settings`
      return
    }

    window.location.href = `https://cabinet.${endpoint}/`
  }, [endpoint, localAuthBaseUrl])

  const onOpenPortfolio = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/portfolio`
  }, [endpoint])

  const onOpenSubscription = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/subscription`
  }, [endpoint])

  const onOpenMyProjects = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/projects`
  }, [endpoint])

  const onOpenNewMyProjects = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/projects/new`
  }, [endpoint])

  const onOpenMyReplies = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/replies`
  }, [endpoint])

  return (
    <Navigation
      intl={intl}
      profile={profile}
      visibleMenu={visibleMenu}
      openMenu={openMenu}
      closeMenu={closeMenu}
      visibleCatalog={visibleCatalog}
      openCatalog={openCatalog}
      closeCatalog={closeCatalog}
      onLogin={onLogin}
      onLogout={onLogout}
      onOpenSettings={onOpenSettings}
      onOpenPortfolio={onOpenPortfolio}
      onOpenSubscription={onOpenSubscription}
      onOpenMyProjects={onOpenMyProjects}
      onOpenNewMyProjects={onOpenNewMyProjects}
      onOpenMyReplies={onOpenMyReplies}
    />
  )
}

export default NavigationFragment
