import { RegistrationFlow }     from '@atls/next-identity-integration'

import React                    from 'react'

import SignUp                   from '@identity/registration-fragment'
import { ForwardArrowLeftIcon } from '@ui/icons'
import { LogoIcon }             from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Link }                 from '@ui/link'

export const Registration = () => (
  <RegistrationFlow>
    <Box bg='rgb(159, 159, 159)' height='100vh'>
      <Column>
        <Layout flexBasis={12} />
        <Layout flexGrow={1} alignItems='center'>
          <Row>
            <Layout flexBasis={[32, 44, 44]} />
            <Layout>
              <Link href='/login'>
                <ForwardArrowLeftIcon width={18} height={18} />
              </Link>
            </Layout>
          </Row>
        </Layout>
        <Layout justifyContent='center'>
          <LogoIcon height='60px' width='156px' />
        </Layout>
        <Layout flexGrow={2} />
        <Layout justifyContent='center'>
          <SignUp />
        </Layout>
        <Layout flexGrow={3} />
      </Column>
    </Box>
  </RegistrationFlow>
)
