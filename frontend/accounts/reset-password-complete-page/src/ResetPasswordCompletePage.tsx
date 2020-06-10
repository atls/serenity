import React                   from 'react'

import { LogoIcon }            from '@ui/icons'
import { Box, Column, Layout } from '@ui/layout'

import ResetPasswordComplete   from './reset-password-complete'

export const ResetPasswordCompletePage = ({ accountUrl, siteUrl }: any) => (
  <Box bg='rgb(159, 159, 159)' height='100vh'>
    <Column>
      <Layout flexGrow={1} />
      <Layout justifyContent='center'>
        <LogoIcon height='60px' width='156px' />
      </Layout>
      <Layout flexGrow={2} />
      <Layout justifyContent='center'>
        <ResetPasswordComplete accountUrl={accountUrl} siteUrl={siteUrl} />
      </Layout>
      <Layout flexGrow={3} />
    </Column>
  </Box>
)
