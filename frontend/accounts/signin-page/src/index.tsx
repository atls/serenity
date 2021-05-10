import React, { useCallback }   from 'react'

import { Seo }                  from './Seo'
import { SigninPage as Signin } from './SigninPage'

const SigninPage = () => {
  const onBack = useCallback(() => {
    window.location.href = `${window.location.origin.replace('accounts.', '')}`
  }, [])

  return (
    <>
      <Seo />
      <Signin onBack={onBack} />
    </>
  )
}

export default SigninPage
