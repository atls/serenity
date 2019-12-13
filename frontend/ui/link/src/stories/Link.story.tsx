import React                    from 'react'

import { Column, Layout, Text } from '@design/ui'

import { SidebarLink }          from '..'

export default {
  title: 'Компоненты|Ссылки',
}

export const SidebarLinkStory = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Ссылки из бокового меню</Text>
    </Layout>
    <Layout mt={15} mx={20}>
      <Column width={256}>
        <SidebarLink href='#' active>
          First
        </SidebarLink>
        <SidebarLink href='#'>Second</SidebarLink>
        <SidebarLink href='#'>Third</SidebarLink>
        <SidebarLink href='#'>Fourth</SidebarLink>
      </Column>
    </Layout>
  </Column>
)

SidebarLinkStory.story = {
  name: 'Ссылки бокового меню',
}
