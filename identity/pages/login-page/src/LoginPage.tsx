import { KratosLoginFlowProvider } from '@atls/react-kratos-browser-flows'

import React                       from 'react'

import SignIn                      from '@identity/login-fragment'
import { ForwardArrowLeftIcon }    from '@ui/icons'
import { LogoIcon }                from '@ui/icons'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'

export const LoginPage = ({ onBack }) => (
  <KratosLoginFlowProvider>
    <Box bg='stardust' height='100vh'>
      <Column>
        <Layout flexBasis={12} />
        <Layout flexGrow={1} alignItems='center'>
          <Row>
            <Layout flexBasis={[32, 44, 44]} />
            <Layout onClick={onBack}>
              <ForwardArrowLeftIcon width={18} height={18} style={{ cursor: 'pointer' }} />
            </Layout>
          </Row>
        </Layout>
        <Layout justifyContent='center'>
          <LogoIcon height='60px' width='156px' />
        </Layout>
        <Layout flexGrow={2} />
        <Layout justifyContent='center'>
          <SignIn />
        </Layout>
        <Layout flexGrow={3} />
      </Column>
    </Box>
  </KratosLoginFlowProvider>
)
