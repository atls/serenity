import React                                  from 'react'
import { storiesOf }                          from '@storybook/react'

import { Column, Layout, List, Sample, Text } from '@design/ui'

import { borders }                            from '../theme'

storiesOf('Дизайн Токены', module).add('Обводки', () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='increased'>Обводки</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List>
        {Object.keys(borders).map((item) => (
          <Sample key={item} name={item} value={borders[item]} border={item} />
        ))}
      </List>
    </Layout>
  </Column>
))
