import { FlowNode }   from '@atls/react-kratos-browser-flows'
import { FlowSubmit } from '@atls/react-kratos-browser-flows'

import React          from 'react'

import { Button }     from '@ui/button'
import { Input }      from '@ui/input'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'

import messages       from './messages'

export const Registration = ({ intl }: any) => (
  <Box width={400} mx={[32, 0]}>
    <Column>
      <Layout>
        <Text color='white' fontWeight='bold' fontSize='giant'>
          {intl.formatMessage(messages.signup)}
        </Text>
      </Layout>
      <Layout flexBasis={[32, 32, 32]} />
      <Layout>
        <FlowNode name='traits.email'>
          {({ attributes }, value, onChange) => (
            <Input
              {...attributes}
              placeholder={intl.formatMessage(messages.email)}
              value={value}
              onChange={onChange}
            />
          )}
        </FlowNode>
      </Layout>
      <Layout flexBasis={24} />
      <Layout>
        <FlowNode name='password'>
          {({ attributes }, value, onChange) => (
            <Input
              {...attributes}
              placeholder={intl.formatMessage(messages.enterPassword)}
              value={value}
              onChange={onChange}
            />
          )}
        </FlowNode>
      </Layout>
      <Layout flexBasis={24} />
      <Layout>
        <FlowNode name='password'>
          {({ attributes }, value, onChange) => (
            <Input
              {...attributes}
              placeholder={intl.formatMessage(messages.confirmPassword)}
              value={value}
              onChange={onChange}
            />
          )}
        </FlowNode>
      </Layout>
      <Layout flexBasis={30} />
      <Layout>
        <FlowSubmit method='password'>
          <Button fill size='large' color='chicago' fontWeight='medium'>
            {intl.formatMessage(messages.createAccount)}
          </Button>
        </FlowSubmit>
      </Layout>
    </Column>
  </Box>
)
