import { useCallback } from 'react'
import React           from 'react'

import { LoginPage }   from './LoginPage'
import { Seo }         from './Seo'

const Page = () => {
  const onBack = useCallback(() => {
    window.location.href = `${window.location.origin.replace('accounts.', '')}`
  }, [])

  return (
    <>
      <Seo />
      <LoginPage onBack={onBack} />
    </>
  )
}

export default Page
