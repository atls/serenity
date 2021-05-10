import React                                  from 'react'
import { storiesOf }                          from '@storybook/react'

import { Column, Layout, List, Sample, Text } from '@design/ui'

import { shadows }                            from '../theme'

storiesOf('Дизайн Токены', module).add('Тени', () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='increased'>Тени</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List>
        {Object.keys(shadows).map(item => (
          <Sample key={item} name={item} value={shadows[item]} boxShadow={item} />
        ))}
      </List>
    </Layout>
  </Column>
))
