import { FlowNode }         from '@atls/next-identity-integration'
import { FlowSubmit }       from '@atls/next-identity-integration'
import { FlowNodeMessages } from '@atls/next-identity-integration'

import React                from 'react'
import { useState }         from 'react'

import { FieldMessages }    from '@identity/messages-fragment'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Input }            from '@ui/input'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import messages             from './messages'

interface Message {
  id: string
  type: string
  text: string
}

export const Registration = ({ intl }: any) => {
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [message, setMessage] = useState<Message>({ id: '', type: '', text: '' })

  return (
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
                onChange={(newValue) => {
                  setPassword(newValue)
                  onChange(newValue)
                }}
              />
            )}
          </FlowNode>
        </Layout>
        <Layout flexBasis={24} />
        <FlowNodeMessages name='password'>
          {(infoMessages) => <FieldMessages messages={infoMessages} />}
        </FlowNodeMessages>
        <Layout>
          <Input
            placeholder={intl.formatMessage(messages.confirmPassword)}
            value={confirmPassword}
            onChange={setConfirmPassword}
            type='password'
          />
        </Layout>
        <Condition match={!!message.id}>
          <Layout flexBasis={12} />
          <FieldMessages messages={[message]} />
        </Condition>
        <Layout flexBasis={!message.id ? 30 : 12} />
        <Layout>
          <FlowSubmit>
            {({ onSubmit }) => (
              <Button
                fill
                size='large'
                color='chicago'
                fontWeight='medium'
                onClick={() => {
                  if (password !== confirmPassword) {
                    setMessage({
                      id: 'confirm',
                      type: 'error',
                      text: intl.formatMessage(messages.passwordsDoNotMatch),
                    })
                  } else {
                    setMessage({ id: '', type: '', text: '' })
                    onSubmit({ method: 'password' })
                  }
                }}
              >
                {intl.formatMessage(messages.createAccount)}
              </Button>
            )}
          </FlowSubmit>
        </Layout>
      </Column>
    </Box>
  )
}
