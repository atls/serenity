import React            from 'react'

import { Avatar }       from '@ui/avatar'
import { Divider }      from '@ui/divider'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { RelativeTime } from '@ui/relative-time'
import { Text }         from '@ui/text'

import messages         from './messages'

export const ProjectCustomer = ({ intl, profile, member, activity }: any) => (
  <Box
    width='100%'
    border='black'
    borderRadius='extra'
    boxShadow='black'
    position='relative'
    flexDirection='column'
  >
    <Column px={25} boxSizing='border-box'>
      <Layout position='absolute' top={-80} alignSelf='center'>
        <Avatar width={160} height={160} src={profile && profile.photo && profile.photo.url} />
      </Layout>
      <Layout flexBasis={95} />
      <Layout justifyContent='center'>
        <Text fontSize='regular' lineHeight='medium' wordBreak='break-word'>
          {profile &&
            profile.personalInformation &&
            `${profile.personalInformation.firstName} ${profile.personalInformation.lastName}`}
        </Text>
      </Layout>
      <Layout flexBasis='2px' />
      {profile && profile.address && profile.address.formatted && (
        <Layout justifyContent='center'>
          <Text color='silver' lineHeight='medium' wordBreak='break-word'>
            {profile.address.formatted}
          </Text>
        </Layout>
      )}
    </Column>
    <Layout flexBasis={17} />
    <Divider />
    <Layout flexBasis={17} />
    <Column px={25} boxSizing='border-box'>
      <Layout>
        <Row justifyContent='space-between'>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='extra'>
              {intl.formatMessage(messages.completeProjects)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Text fontWeight='medium' lineHeight='extra'>
              {member && member.completedProjects}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout flexBasis={14} />
      <Layout>
        <Row justifyContent='space-between'>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='extra'>
              {intl.formatMessage(messages.openProjects)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Text fontWeight='medium' lineHeight='extra'>
              {member && member.openProjects}
            </Text>
          </Layout>
        </Row>
      </Layout>
      <Layout flexBasis={14} />
      <Layout>
        <Row justifyContent='space-between'>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='extra'>
              {intl.formatMessage(messages.activity)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Text fontWeight='medium' lineHeight='extra'>
              {activity && activity.last && <RelativeTime value={activity.last} />}
            </Text>
          </Layout>
        </Row>
      </Layout>
    </Column>
    <Layout flexBasis={28} />
  </Box>
)
