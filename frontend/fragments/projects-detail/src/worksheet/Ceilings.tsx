import React              from 'react'
import messages           from '@fragments/ceilings-worksheet/src/messages'

import { Column, Layout } from '@ui/layout'
import { Text }           from '@ui/text'

import { CheckItem }      from './CheckItem'

export const Ceilings = ({
  intl,
  ceilingType,
  size,
  mounting = {},
  installEngineeringSystems = {},
  installationRoom = {},
  projectStage = {},
  requireAdditionally = {},
}) => (
  <Column>
    <Layout>
      {ceilingType.group && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.ceilingType)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {intl.formatMessage(messages[ceilingType.group])}
              {ceilingType.type && ', '}
            </Text>
            {ceilingType.type && (
              <Text fontSize='regular' lineHeight='medium'>
                {intl.formatMessage(messages[ceilingType.type])}
              </Text>
            )}
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      {(size.length || size.width) && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.size)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            {size.length && (
              <Text fontSize='regular' lineHeight='medium'>
                {`${intl.formatMessage(messages.length)}: ${size.length}`}
                {size.width && ', '}
              </Text>
            )}
            {size.width && (
              <Text fontSize='regular' lineHeight='medium'>
                {`${intl.formatMessage(messages.width)}: ${size.width}`}
              </Text>
            )}
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.mounting)}
        data={mounting}
        values={{
          heatingAndOtherPipes: intl.formatMessage(messages.heatingAndOtherPipes),
          installCornices: intl.formatMessage(messages.installCornices),
          builtinWardrobe: intl.formatMessage(messages.builtinWardrobe),
          complexCeiling: intl.formatMessage(messages.complexCeiling),
          more3Meters: intl.formatMessage(messages.more3Meters),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.installEngineeringSystems)}
        data={installEngineeringSystems}
        values={{
          electricalWiring: intl.formatMessage(messages.electricalWiring),
          spotlights: intl.formatMessage(messages.spotlights),
          pendantChandelier: intl.formatMessage(messages.pendantChandelier),
          ceilingChandelier: intl.formatMessage(messages.ceilingChandelier),
          ventilationGrilles: intl.formatMessage(messages.ventilationGrilles),
          alarmSensors: intl.formatMessage(messages.alarmSensors),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.installationRoom)}
        data={installationRoom}
        values={{
          bathroom: intl.formatMessage(messages.bathroom),
          garage: intl.formatMessage(messages.garage),
          livingRoom: intl.formatMessage(messages.livingRoom),
          cabinet: intl.formatMessage(messages.cabinet),
          kitchen: intl.formatMessage(messages.kitchen),
          basement: intl.formatMessage(messages.basement),
          laundry: intl.formatMessage(messages.laundry),
          hallway: intl.formatMessage(messages.hallway),
          bedroom: intl.formatMessage(messages.bedroom),
          diningRoom: intl.formatMessage(messages.diningRoom),
          terrace: intl.formatMessage(messages.terrace),
          restroom: intl.formatMessage(messages.restroom),
          installationRoomAnother: intl.formatMessage(messages.installationRoomAnother),
        }}
      />
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
