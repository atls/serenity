import React                  from 'react'
import { FC }                 from 'react'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'

import { FieldMessagesProps } from './messages.interfaces'

const FieldMessages: FC<FieldMessagesProps> = ({ messages = [] }) => (
  <Column>
    {messages.map((message) => (
      <Layout key={message?.text}>
        <Text key={message?.id} color={message?.type === 'error' ? 'red' : ''}>
          {message?.text}
        </Text>
      </Layout>
    ))}
  </Column>
)

export { FieldMessages }
