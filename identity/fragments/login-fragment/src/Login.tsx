import { FlowNode }   from '@atls/react-kratos-browser-flows'
import { FlowSubmit } from '@atls/react-kratos-browser-flows'

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

export const Login = ({ intl }: any) => {
  return (
    <Box width={400} mx={[32, 0]}>
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
                placeholder={intl.formatMessage(messages.login)}
                value={value}
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
                value={value}
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
                href='/registration'
              >
                {intl.formatMessage(messages.signup)}
              </Button>
            </Layout>
            <Layout flexBasis={120}>
              <FlowSubmit method='password'>
                <Button fill size='large' color='chicago' fontWeight='bold' type='submit'>
                  {intl.formatMessage(messages.signin)}
                </Button>
              </FlowSubmit>
            </Layout>
          </Row>
        </Layout>
      </Column>
    </Box>
  )
}
