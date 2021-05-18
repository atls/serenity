import React                          from 'react'
import { storiesOf }                  from '@storybook/react'

import { Column, Layout, List, Text } from '@design/ui'

import { Garniture, Size }            from './components'
import { fontFaces, fontSizes }       from '../theme'

fontFaces.sort((a, b) => b.weight - a.weight).sort((a, b) => (a.family > b.family ? 1 : -1))

storiesOf('Дизайн Токены', module).add('Типографика', () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='increased'>Гарнитура</Text>
    </Layout>
    <Layout mt={10} mx={10}>
      <List flexDirection='column'>
        {fontFaces.map((font) => (
          <Garniture
            key={`${font.family} ${font.type}`}
            name={`${font.family} ${font.type}`}
            family={font.family}
            weight={font.weight}
          />
        ))}
      </List>
    </Layout>
    <Layout mt={40} mx={20}>
      <Text fontSize='increased'>Размеры</Text>
    </Layout>
    <Layout mt={10} mx={10}>
      <List flexDirection='column'>
        {Object.keys(fontSizes).map((size) => (
          <Size key={size} name={size} size={fontSizes[size]} />
        ))}
      </List>
    </Layout>
  </Column>
))
