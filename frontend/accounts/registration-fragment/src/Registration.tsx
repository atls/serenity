import React, { useEffect, useRef } from 'react'

import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout }      from '@ui/layout'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const Registration = ({
  intl,
  email,
  password,
  confirmPassword,
  onChangeCsrfToken,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onCreateAccount,
}: any) => {
  const formRef = useRef(null)

  useEffect(() => {
    const cookieToken = document.cookie
      .split(';')
      .filter((cookie) => cookie.split('=')[0].trim() === 'csrf_token')[0]
      .split('=')[1]
      .trim()
    onChangeCsrfToken(decodeURIComponent(cookieToken))
    formRef.current.action = `${window.location.origin.replace(
      'accounts',
      'kratos'
    )}/self-service/registration/methods/password?flow=${window.location.search
      .split('=')[1]
      .replace('?', '')}`
  }, [])

  return (
    <form method='POST' ref={formRef}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.signup)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 32]} />
          <Layout>
            <Input
              placeholder={intl.formatMessage(messages.email)}
              value={email}
              onChange={onChangeEmail}
              onEnter={onCreateAccount}
            />
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <Input
              type='password'
              placeholder={intl.formatMessage(messages.enterPassword)}
              value={password}
              onChange={onChangePassword}
              onEnter={onCreateAccount}
            />
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <Input
              type='password'
              placeholder={intl.formatMessage(messages.confirmPassword)}
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              onEnter={onCreateAccount}
            />
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Button fill size='large' color='chicago' fontWeight='medium' onClick={onCreateAccount}>
              {intl.formatMessage(messages.createAccount)}
            </Button>
          </Layout>
        </Column>
      </Box>
    </form>
  )
}
