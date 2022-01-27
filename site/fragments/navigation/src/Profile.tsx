import React                      from 'react'

import { Avatar }                 from '@ui/avatar'
import { Button }                 from '@ui/button'
import { Dropdown }               from '@ui/dropdown'
import { DropdownItem }           from '@ui/dropdown'
import { DropdownTrigger }        from '@ui/dropdown'
import { ArrowDownIcon }          from '@ui/icons'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { NavLink as BaseNavLink } from '@ui/link'
import { Text }                   from '@ui/text'

import messages                   from './messages'

export const Profile = ({
  intl,
  type,
  photo = {},
  name,
  onLogout,
  onOpenSettings,
  onOpenPortfolio,
  onOpenSubscription,
  onOpenMyProjects,
  onOpenNewMyProjects,
  onOpenMyReplies,
}: any) => (
  <Row justifyContent='flex-end'>
    {type === 'specialist' && (
      <>
        <Layout flexBasis={20} />
        <Layout display={['none', 'none', 'flex']}>
          <BaseNavLink onClick={onOpenMyReplies}>
            {intl.formatMessage(messages.myReplies)}
          </BaseNavLink>
        </Layout>
        <Layout flexBasis={[0, 0, 24]} />
      </>
    )}
    {type === 'customer' && (
      <>
        <Layout flexBasis={20} />
        <Layout display={['none', 'none', 'flex']}>
          <BaseNavLink onClick={onOpenMyProjects}>
            {intl.formatMessage(messages.myProjects)}
          </BaseNavLink>
        </Layout>
        <Layout flexBasis={[0, 0, 32]} />
        <Layout alignItems='center' display={['none', 'none', 'flex']}>
          <Button
            color='chicago'
            size='small'
            fontWeight='bold'
            borderRadius={20}
            onClick={() => onOpenNewMyProjects()}
          >
            {intl.formatMessage(messages.newMyProjects)}
          </Button>
        </Layout>
        <Layout flexBasis={[0, 0, 24]} />
      </>
    )}
    <Layout>
      <DropdownTrigger
        menu={
          <Dropdown>
            {type === 'specialist' && (
              <>
                <DropdownItem onClick={onOpenPortfolio}>
                  <Text>{intl.formatMessage(messages.portfolio)}</Text>
                </DropdownItem>
                <DropdownItem onClick={onOpenSubscription}>
                  <Text>{intl.formatMessage(messages.subscription)}</Text>
                </DropdownItem>
              </>
            )}
            <DropdownItem onClick={onOpenSettings}>
              <Text>{intl.formatMessage(messages.settings)}</Text>
            </DropdownItem>
            <DropdownItem onClick={onLogout}>
              <Text>{intl.formatMessage(messages.logout)}</Text>
            </DropdownItem>
          </Dropdown>
        }
      >
        <Row>
          <Layout alignItems='center'>
            <Avatar width={36} height={36} color='alto' src={(photo && photo.url) || null} />
          </Layout>
          <Layout px={12} alignItems='center'>
            <Text color='white' fontWeight='semiBold' fontSize='tiny'>
              {name}
            </Text>
          </Layout>
          <Layout alignItems='center'>
            <ArrowDownIcon color='#FFFFFF' width={12} />
          </Layout>
        </Row>
      </DropdownTrigger>
    </Layout>
  </Row>
)
