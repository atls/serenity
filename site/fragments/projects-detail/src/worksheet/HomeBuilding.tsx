import messages      from '@fragments/home-building-worksheet/src/messages'

import React         from 'react'

import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'

import { CheckItem } from './CheckItem'

export const HomeBuilding = ({
  intl,
  houseType,
  foundationType,
  roofingType,
  houseArea,
  floorsNumber,
  projectStage,
  requireAdditionally,
}) => (
  <Column>
    <Layout>
      {houseType.id && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.houseType)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {houseType.name}
            </Text>
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      {foundationType.id && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.foundationType)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {foundationType.name}
            </Text>
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      {roofingType.id && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.roofingType)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {roofingType.name}
            </Text>
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      <Row>
        <Layout>
          {houseArea && (
            <Column>
              <Layout>
                <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
                  {intl.formatMessage(messages.houseArea)}
                </Text>
              </Layout>
              <Layout flexBasis='6px' />
              <Layout>
                <Text fontSize='regular' lineHeight='medium'>
                  {houseArea}
                </Text>
              </Layout>
              <Layout flexBasis={27} />
            </Column>
          )}
        </Layout>
        <Layout flexBasis={houseArea ? 24 : 0} />
        <Layout>
          {floorsNumber && (
            <Column>
              <Layout>
                <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
                  {intl.formatMessage(messages.floorsNumber)}
                </Text>
              </Layout>
              <Layout flexBasis='6px' />
              <Layout>
                <Text fontSize='regular' lineHeight='medium'>
                  {floorsNumber}
                </Text>
              </Layout>
              <Layout flexBasis={27} />
            </Column>
          )}
        </Layout>
      </Row>
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.projectStage)}
        data={projectStage}
        values={{
          planning: intl.formatMessage(messages.planning),
          budgeting: intl.formatMessage(messages.budgeting),
          executorSearching: intl.formatMessage(messages.executorSearching),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.requireAdditionally)}
        data={requireAdditionally}
        values={{
          purchaseMaterials: intl.formatMessage(messages.purchaseMaterials),
          unloadingAndLifting: intl.formatMessage(messages.unloadingAndLifting),
          dismantling: intl.formatMessage(messages.dismantling),
          garbageRemoval: intl.formatMessage(messages.garbageRemoval),
          cleaning: intl.formatMessage(messages.cleaning),
        }}
      />
    </Layout>
  </Column>
)
