import React                                  from 'react'

import { Column, Layout, List, Sample, Text } from '@design/ui'
import { storiesOf }                          from '@storybook/react'

import { radii }                              from '../theme'

storiesOf('Дизайн Токены', module).add('Формы', () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='increased'>Формы</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List>
        {Object.keys(radii).map(item => (
          <Sample key={item} name={item} value={radii[item]} borderRadius={item} border='codgray' />
        ))}
      </List>
    </Layout>
  </Column>
))
