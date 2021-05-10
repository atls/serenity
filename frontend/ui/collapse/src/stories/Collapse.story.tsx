import React                    from 'react'

import { Column, Layout, Text } from '@design/ui'

import { Collapse, Panel }      from '..'

export default {
  title: 'Компоненты|Раскладывающийся список',
}

export const CollapseStory = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Раскладывающийся список</Text>
    </Layout>
    <Layout
      m={30}
      width={300}
      style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '4px' }}
    >
      <Collapse>
        <Panel header='Первый'>
          <Column>
            <Layout>Первый</Layout>
            <Layout>Второй</Layout>
            <Layout>Третий</Layout>
          </Column>
        </Panel>
        <Panel header='Второй'>Второй</Panel>
        <Panel header='Третий'>Третий</Panel>
        <Panel header='Четвертый'>Четвертый</Panel>
      </Collapse>
    </Layout>
  </Column>
)

CollapseStory.story = {
  name: 'Раскладывающийся список',
}
