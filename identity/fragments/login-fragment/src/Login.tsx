import { FlowNode }   from '@atls/next-identity-integration'
import { FlowSubmit } from '@atls/next-identity-integration'
import React          from 'react'

import { Button }     from '@ui/button'
import { Input }      from '@ui/input'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Link }       from '@ui/link'
import { Text }       from '@ui/text'

import messages       from './messages'

export const Login = ({ intl }: any) => (
  <FlowSubmit>
    {({ onSubmit }) => (
      <Box
        as='form'
        width={400}
        mx={[32, 0]}
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          onSubmit({ method: 'password' })
        }}
      >
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.signin)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 40]} />
          <Layout>
            <FlowNode name='password_identifier'>
              {(field, value, onChange) => (
                <Input
                  {...field.attributes}
                  autoComplete='username'
                  placeholder={intl.formatMessage(messages.login)}
                  value={value || ''}
                  onChange={onChange}
                />
              )}
            </FlowNode>
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <FlowNode name='password'>
              {(field, value, onChange) => (
                <Input
                  {...field.attributes}
                  autoComplete='current-password'
                  value={value || ''}
                  onChange={onChange}
                  borderRight='0px !important'
                  placeholder={intl.formatMessage(messages.password)}
                  addonAfter={
                    <Link href='/auth/recovery' color='silver'>
                      {intl.formatMessage(messages.restore)}
                    </Link>
                  }
                />
              )}
            </FlowNode>
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
                  href='/auth/registration'
                >
                  {intl.formatMessage(messages.signup)}
                </Button>
              </Layout>
              <Layout flexBasis={120}>
                <Button fill size='large' color='chicago' fontWeight='bold' type='submit'>
                  {intl.formatMessage(messages.signin)}
                </Button>
              </Layout>
            </Row>
          </Layout>
        </Column>
      </Box>
    )}
  </FlowSubmit>
)
