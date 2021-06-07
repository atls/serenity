import React, { useEffect, useState } from 'react'

import { Form, FormField }          from '@atls/react-kratos-forms'
import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout }      from '@ui/layout'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const Settings = ({
  intl
}: any) => {
  const [csrfToken, setCsrfToken] = useState<string>('')
  const [action, setAction] = useState<string>('')

  const fields = [
    { name: 'csrf_token', type: 'hidden' },
    { name: 'password', type: 'password', placeholder: intl.formatMessage(messages.enterPassword), value: '' },
    { name: 'confirmPassword', type: 'password', placeholder: intl.formatMessage(messages.confirmPassword), value: '' },
  ]

  useEffect(() => {
    const cookieToken = document.cookie
      .split(';')
      .filter((cookie) => cookie.split('=')[0].trim() === 'csrf_token')[0]
      .split('=')[1]
      .trim()
    setCsrfToken(decodeURIComponent(cookieToken))
    setAction(`${window.location.origin.replace(
      'accounts',
      'kratos'
    )}/self-service/settings/methods/password?flow=${window.location.search
      .split('=')[1]
      .replace('?', '')}`)
  }, [])

  return (
    <Form fields={fields} action={action}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.passwordChange)}
            </Text>
          </Layout>
          <FormField name='csrf_token'>
            {({ name, type }) => (
              <Input
                name={name}
                type={type}
                value={csrfToken}
              />
            )}
          </FormField>
          <Layout flexBasis={[32, 32, 32]} />
          <Layout>
            <FormField name='password'>
              {({ name, type, placeholder }, value, onChange) => (
                <Input
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                />
              )}
            </FormField>
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <FormField name='changePassword'>
              {({ name, type, placeholder }, value, onChange) => (
                <Input
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                />
              )}
            </FormField>
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Button fill size='large' color='chicago' fontWeight='medium' onClick={onChange}>
              {intl.formatMessage(messages.changePassword)}
            </Button>
          </Layout>
        </Column>
      </Box>
    </Form>
  )
}
