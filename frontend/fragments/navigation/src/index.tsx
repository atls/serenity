import React, { useCallback } from 'react'
import { useUser }            from '@atlantis-lab/react-user'
import { useIntl }            from 'react-intl'

import { useDrawer }          from '@ui/drawer'

import { Navigation }         from './Navigation'
import { useProfile }         from './useProfile'

export default () => {
  const user = useUser()

  const { visible: visibleMenu, open: openMenu, close: closeMenu } = useDrawer('menu')
  const { visible: visibleCatalog, open: openCatalog, close: closeCatalog } = useDrawer('catalog')

  const intl = useIntl()

  const profile = user ? useProfile() : {}

  let endpoint = null

  if (typeof window !== 'undefined') {
    endpoint = window.location.hostname.includes('atls.tech')
      ? 'serenity.atls.tech'
      : window.location.hostname
  }

  const onLogin = useCallback(() => {
    window.location.href = `https://accounts.${endpoint}/signin?continue=${window.location.href}`
  }, [])

  const onLogout = useCallback(() => {
    window.location.href = `https://accounts.${endpoint}/signout?continue=${window.location.href}`
  }, [])

  const onOpenSettings = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/`
  }, [])

  const onOpenPortfolio = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/portfolio`
  }, [])

  const onOpenSubscription = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/subscription`
  }, [])

  const onOpenMyProjects = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/projects`
  }, [])

  const onOpenNewMyProjects = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/projects/new`
  }, [])

  const onOpenMyReplies = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/replies`
  }, [])

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
