import React                    from 'react'

import { Column, Layout, Text } from '@design/ui'

import { Divider }              from '../Divider'

export default {
  title: 'Компоненты/Разделитель',
}

export const Horizontal = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Горизонтальный</Text>
    </Layout>
    <Layout mt={15} mx={20}>
      <Divider />
    </Layout>
  </Column>
)

export const Vertical = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Вертикальный</Text>
    </Layout>
    <Layout mt={15} mx={20} height={100}>
      <Divider vertical />
    </Layout>
  </Column>
)

Horizontal.story = {
  name: 'Горизонтальный',
}

Vertical.story = {
  name: 'Вертикальный',
}
