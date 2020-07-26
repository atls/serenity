import React                   from 'react'
import { Input }               from '@atlantis-lab/input'

import { Button }              from '@ui/button'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const ResetPassword = ({ intl, email, errors = {}, onChangeEmail, onReset }: any) => (
  <Box width={400} mx={[32, 0]}>
    <Column>
      <Layout>
        <Text color='white' fontWeight='bold' fontSize='giant'>
          {intl.formatMessage(messages.resetPassword)}
        </Text>
      </Layout>
      <Layout flexBasis={[32, 32, 32]} />
      <Layout>
        <Input
          placeholder={intl.formatMessage(messages.email)}
          value={email}
          invalid={errors.email}
          onChange={onChangeEmail}
          onEnter={onReset}
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
        <Button fill size='large' color='chicago' fontWeight='medium' onClick={onReset}>
          {intl.formatMessage(messages.sendMail)}
        </Button>
      </Layout>
    </Column>
  </Box>
)
