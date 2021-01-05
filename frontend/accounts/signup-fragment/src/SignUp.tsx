import React                   from 'react'

import { Button }              from '@ui/button'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const SignUp = ({
  intl,
  email,
  password,
  confirmPassword,
  errors = {},
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onCreateAccount,
}: any) => (
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
          invalid={errors.email}
          onChange={onChangeEmail}
          onEnter={onCreateAccount}
        />
      </Layout>
      <Layout flexBasis={24}>
        {errors.email && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red' fontSize='tiny'>
                {errors.email}
              </Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Input
          type='password'
          placeholder={intl.formatMessage(messages.enterPassword)}
          value={password}
          invalid={errors.password}
          onChange={onChangePassword}
          onEnter={onCreateAccount}
        />
      </Layout>
      <Layout flexBasis={24}>
        {errors.password && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red' fontSize='tiny'>
                {errors.password}
              </Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Input
          type='password'
          placeholder={intl.formatMessage(messages.confirmPassword)}
          value={confirmPassword}
          invalid={errors.confirmPassword}
          onChange={onChangeConfirmPassword}
          onEnter={onCreateAccount}
        />
      </Layout>
      <Layout flexBasis={30}>
        {errors.confirmPassword && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red' fontSize='tiny'>
                {errors.confirmPassword}
              </Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Button fill size='large' color='chicago' fontWeight='medium' onClick={onCreateAccount}>
          {intl.formatMessage(messages.createAccount)}
        </Button>
      </Layout>
    </Column>
  </Box>
)
