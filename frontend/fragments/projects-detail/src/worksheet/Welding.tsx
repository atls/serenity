import React              from 'react'
import messages           from '@fragments/welding-worksheet/src/messages'

import { Column, Layout } from '@ui/layout'

import { CheckItem }      from './CheckItem'

export const Welding = ({
  intl,
  needToWeld = {},
  whereToWeld = {},
  task = {},
  projectStage = {},
  requireAdditionally = {},
}) => (
  <Column>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.needToWeld)}
        data={needToWeld}
        values={{
          metalConstructions: intl.formatMessage(messages.metalConstructions),
          gatesHingesDoors: intl.formatMessage(messages.gatesHingesDoors),
          frameworksCanopies: intl.formatMessage(messages.frameworksCanopies),
          fences: intl.formatMessage(messages.fences),
          heatingAndWaterPipes: intl.formatMessage(messages.heatingAndWaterPipes),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.whereToWeld)}
        data={whereToWeld}
        values={{
          inside: intl.formatMessage(messages.inside),
          outside: intl.formatMessage(messages.outside),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.task)}
        data={task}
        values={{
          craft: intl.formatMessage(messages.craft),
          repair: intl.formatMessage(messages.repair),
          upgrade: intl.formatMessage(messages.upgrade),
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
