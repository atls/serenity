import React                                  from 'react'

import { Column, Layout, List, Sample, Text } from '@design/ui'
import { storiesOf }                          from '@storybook/react'

import { colors }                             from '../theme'

storiesOf('Дизайн Токены', module).add('Цвета', () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='increased'>Цвета</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List>
        {Object.keys(colors).map(item => (
          <Sample key={item} name={item} value={colors[item]} bg={item} />
        ))}
      </List>
    </Layout>
  </Column>
))
