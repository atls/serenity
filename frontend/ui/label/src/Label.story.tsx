import React                          from 'react'

import { Column, Layout, List, Text } from '@design/ui'

import { Label }                      from './Label'

export default {
  title: 'Компоненты|Лейбл',
}

export const Size = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Размер</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List alignItems='baseline' justifyContent='start' width='100%'>
        <Layout>
          <Label>Pro</Label>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Label size='small'>Драфт</Label>
        </Layout>
      </List>
    </Layout>
  </Column>
)

Size.story = {
  name: 'Размер',
}
