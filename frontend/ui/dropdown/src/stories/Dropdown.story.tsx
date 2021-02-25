import React                      from 'react'

import { Column, Layout, Text }   from '@design/ui'

import { Dropdown, DropdownItem } from '..'

export default {
  title: 'Компоненты|Выпадающее меню',
}

export const DropdownStory = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Выпадающее меню</Text>
    </Layout>
    <Layout style={{ position: 'relative' }} mt={15} mx={20}>
      <Dropdown border>
        <DropdownItem>
          <Layout>first</Layout>
        </DropdownItem>
        <DropdownItem
          menu={
            <Dropdown>
              <DropdownItem>
                <Layout>first</Layout>
              </DropdownItem>
              <DropdownItem>
                <Layout>second</Layout>
              </DropdownItem>
              <DropdownItem>
                <Layout>third</Layout>
              </DropdownItem>
            </Dropdown>
          }
        >
          <Layout>second</Layout>
        </DropdownItem>
        <DropdownItem>
          <Layout>third</Layout>
        </DropdownItem>
      </Dropdown>
    </Layout>
  </Column>
)

DropdownStory.story = {
  name: 'Выпадающее меню',
}
