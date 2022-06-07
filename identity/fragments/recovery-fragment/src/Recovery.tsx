import { FlowNode }   from '@atls/next-identity-integration'
import { FlowSubmit } from '@atls/next-identity-integration'

import React          from 'react'

import { Button }     from '@ui/button'
import { Input }      from '@ui/input'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'

import messages       from './messages'

export const Recovery = ({ intl }: any) => (
  <Box width={400} mx={[32, 0]}>
    <Column>
      <Layout>
        <Text color='white' fontWeight='bold' fontSize='giant'>
          {intl.formatMessage(messages.resetPassword)}
        </Text>
      </Layout>
      <Layout flexBasis={[32, 32, 32]} />
      <Layout>
        <FlowNode name='email'>
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
        <FlowSubmit>
          {({ onSubmit }) => (
            <Button
              fill
              size='large'
              color='chicago'
              fontWeight='medium'
              onClick={() => onSubmit(({ method: 'link' }))}
            >
              {intl.formatMessage(messages.sendMail)}
            </Button>
          )}
        </FlowSubmit>
      </Layout>
    </Column>
  </Box>
)
