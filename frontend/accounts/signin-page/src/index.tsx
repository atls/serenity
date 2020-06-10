import React, { useCallback } from 'react'

import { Seo }                from './Seo'
import { SigninPage }         from './SigninPage'

export default () => {
  const onBack = useCallback(() => {
    window.location.href = `${window.location.origin.replace('accounts.', '')}`
  }, [])

  return (
    <>
      <Seo />
      <SigninPage onBack={onBack} />
    </>
  )
}
