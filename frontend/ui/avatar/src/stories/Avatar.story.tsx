import React                          from 'react'

import { Column, Layout, List, Text } from '@design/ui'

import { Avatar }                     from '../Avatar'
import { testImageUrl }               from './assets'

export default {
  title: 'Компоненты|Аватар',
}

export const Size = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Размер</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List alignItems='baseline' justifyContent='start' width='100%'>
        <Layout>
          <Avatar width={160} height={160} />
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Avatar width={56} height={56} />
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Avatar width={36} height={36} />
        </Layout>
      </List>
    </Layout>
  </Column>
)

export const WithImage = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>С изображением</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <Avatar width={156} height={156} src={testImageUrl} />
    </Layout>
  </Column>
)

Size.story = {
  name: 'Размер',
}

WithImage.story = {
  name: 'С изображением',
}
