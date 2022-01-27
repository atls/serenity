import messages      from '@fragments/floors-worksheet/src/messages'

import React         from 'react'

import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { CheckItem } from './CheckItem'

export const Floors = ({
  intl,
  floorArea,
  typeOfFlooring = {},
  foundationPreparation = {},
  additionalWork = {},
}) => (
  <Column>
    <Layout>
      {floorArea && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.floorArea)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {floorArea} {intl.formatMessage(messages.squareMeter)}
            </Text>
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.typeOfFlooring)}
        data={typeOfFlooring}
        values={{
          linoleum: intl.formatMessage(messages.linoleum),
          laminate: intl.formatMessage(messages.laminate),
          parquet: intl.formatMessage(messages.parquet),
          carpet: intl.formatMessage(messages.carpet),
          batten: intl.formatMessage(messages.batten),
          ceramicTile: intl.formatMessage(messages.ceramicTile),
          cork: intl.formatMessage(messages.cork),
          marmoleum: intl.formatMessage(messages.marmoleum),
          polymerFloor: intl.formatMessage(messages.polymerFloor),
          anotherTypeOfFlooring: intl.formatMessage(messages.anotherTypeOfFlooring),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.foundationPreparation)}
        data={foundationPreparation}
        values={{
          floorScreed: intl.formatMessage(messages.floorScreed),
          concreteFloor: intl.formatMessage(messages.concreteFloor),
          woodenFloor: intl.formatMessage(messages.woodenFloor),
          notRequired: intl.formatMessage(messages.notRequired),
          anotherPreparation: intl.formatMessage(messages.anotherPreparation),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.additionalWork)}
        data={additionalWork}
        values={{
          dismantlingFloor: intl.formatMessage(messages.dismantlingFloor),
          installSkirtingBoards: intl.formatMessage(messages.installSkirtingBoards),
          installDoorSill: intl.formatMessage(messages.installDoorSill),
        }}
      />
    </Layout>
  </Column>
)
