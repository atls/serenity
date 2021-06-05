import React, { useEffect, useRef } from 'react'

import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Link }                     from '@ui/link'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const Login = ({
  intl,
  identifier,
  password,
  onChangeCsrfToken,
  onChangeIdentifier,
  onChangePassword,
  onSignIn,
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
    )}/self-service/login/methods/password?flow=${window.location.search
      .split('=')[1]
      .replace('?', '')}`
  }, [])

  return (
    <form method='POST' ref={formRef}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.signin)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 40]} />
          <Layout>
            <Input
              type='email'
              placeholder={intl.formatMessage(messages.login)}
              value={identifier}
              onChange={onChangeIdentifier}
              onEnter={onSignIn}
            />
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Input
              type='password'
              value={password}
              onEnter={onSignIn}
              onChange={onChangePassword}
              borderRight='0px !important'
              placeholder={intl.formatMessage(messages.password)}
              addonAfter={
                <Link href='/recovery' color='silver'>
                  {intl.formatMessage(messages.restore)}
                </Link>
              }
            />
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Row justifyContent='space-between'>
              <Layout flexBasis={['auto', 190]}>
                <Button
                  fill
                  size='large'
                  color='chicagolite'
                  fontWeight='bold'
                  as={Link}
                  href='/registration'
                >
                  {intl.formatMessage(messages.signup)}
                </Button>
              </Layout>
              <Layout flexBasis={120}>
                <Button fill size='large' color='chicago' fontWeight='bold' onClick={onSignIn}>
                  {intl.formatMessage(messages.signin)}
                </Button>
              </Layout>
            </Row>
          </Layout>
        </Column>
      </Box>
    </form>
  )
}
