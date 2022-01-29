import messages      from '@fragments/wallpapering-worksheet/src/messages'

import React         from 'react'

import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { CheckItem } from './CheckItem'

export const Wallpapering = ({
  intl,
  surfaceArea,
  wallpaperType = {},
  preparingWalls = {},
  additionalWork = {},
}) => (
  <Column>
    <Layout>
      {surfaceArea && (
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {intl.formatMessage(messages.surfaceArea)}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {surfaceArea} {intl.formatMessage(messages.squareMeter)}
            </Text>
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      )}
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.wallpaperType)}
        data={wallpaperType}
        values={{
          paper: intl.formatMessage(messages.paper),
          vinyl: intl.formatMessage(messages.vinyl),
          nonWoven: intl.formatMessage(messages.nonWoven),
          liquid: intl.formatMessage(messages.liquid),
          photowallPaper: intl.formatMessage(messages.photowallPaper),
          glassPaper: intl.formatMessage(messages.glassPaper),
          forPainting: intl.formatMessage(messages.forPainting),
          textile: intl.formatMessage(messages.textile),
          wallpaperTypeAnother: intl.formatMessage(messages.wallpaperTypeAnother),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.preparingWalls)}
        data={preparingWalls}
        values={{
          brickConcrete: intl.formatMessage(messages.brickConcrete),
          plastered: intl.formatMessage(messages.plastered),
          gypsum: intl.formatMessage(messages.gypsum),
          preparingWallsAnother: intl.formatMessage(messages.preparingWallsAnother),
        }}
      />
    </Layout>
    <Layout>
      <CheckItem
        caption={intl.formatMessage(messages.additionalWork)}
        data={additionalWork}
        values={{
          dismantlingOldFinish: intl.formatMessage(messages.dismantlingOldFinish),
          align: intl.formatMessage(messages.align),
          installSkirting: intl.formatMessage(messages.installSkirting),
        }}
      />
    </Layout>
  </Column>
)
