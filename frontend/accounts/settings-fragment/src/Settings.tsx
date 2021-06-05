import React, { useEffect, useRef } from 'react'

import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout }      from '@ui/layout'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const Settings = ({
  intl,
  password,
  confirmPassword,
  onChangeCsrfToken,
  onChangePassword,
  onChangeConfirmPassword,
  onChange,
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
    )}/self-service/settings/methods/password?flow=${window.location.search
      .split('=')[1]
      .replace('?', '')}`
  }, [])

  return (
    <form method='POST' ref={formRef}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.passwordChange)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 32]} />
          <Layout>
            <Input
              type='password'
              placeholder={intl.formatMessage(messages.enterPassword)}
              value={password}
              onChange={onChangePassword}
              onEnter={onChange}
            />
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <Input
              type='password'
              placeholder={intl.formatMessage(messages.confirmPassword)}
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              onEnter={onChange}
            />
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Button fill size='large' color='chicago' fontWeight='medium' onClick={onChange}>
              {intl.formatMessage(messages.changePassword)}
            </Button>
          </Layout>
        </Column>
      </Box>
    </form>
  )
}
