import React                          from 'react'

import { Column, Layout, List, Text } from '@design/ui'

import * as icons                     from '..'
import { Icon }                       from './components'

export default {
  title: 'Компоненты|Иконки',
}

export const IconStory = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Иконки</Text>
    </Layout>
    <Layout mt={15} mx={20}>
      <List>
        {Object.keys(icons).map(icon => (
          <Icon key={icon} name={icon} icon={icons[icon]} />
        ))}
      </List>
    </Layout>
  </Column>
)

IconStory.story = {
  name: 'Иконки',
}
