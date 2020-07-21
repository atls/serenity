import React                        from 'react'
import { Input }                    from '@atlantis-lab/input'

import { Button }                   from '@ui/button'
import { Box, Column, Layout, Row } from '@ui/layout'
import { NextLink as Link }         from '@ui/link'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const SignIn = ({
  intl,
  email,
  password,
  errors = {},
  onChangeEmail,
  onChangePassword,
  onSignIn,
}: any) => (
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
          value={email}
          invalid={errors.email}
          onChange={onChangeEmail}
          onEnter={onSignIn}
        />
      </Layout>
      <Layout flexBasis={30}>
        {errors.email && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red'>{errors.email}</Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Input
          type='password'
          value={password}
          onEnter={onSignIn}
          invalid={errors.password}
          onChange={onChangePassword}
          borderRight='0px !important'
          placeholder={intl.formatMessage(messages.password)}
          addonAfter={
            <Link href='/reset-password' color='silver'>
              {intl.formatMessage(messages.restore)}
            </Link>
          }
        />
      </Layout>
      <Layout flexBasis={30}>
        {errors.password && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red'>{errors.password}</Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Row justifyContent='space-between'>
          <Layout flexBasis={['auto', 190]}>
            <Button
              fill
              size='large'
              color='chicagolite'
              fontWeight='bold'
              as={Link}
              href='/signup'
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
)
