import React                                                  from 'react'
import { select, text, withKnobs }                            from '@storybook/addon-knobs'
import { colors, fontSizes, fontWeights, fonts, lineHeights } from '@ui/theme/src/theme'

import { Column, Layout }                                     from '@design/ui'

import { Text }                                               from '../Text'

export default {
  title: 'Компоненты|Текст',
}

export const TextStory = () => {
  const example = text('Пример текста', 'Пример текста')
  const color = select('Цвет', colors, colors.chicago)
  const lineHeight = select('Высота', lineHeights, lineHeights.normal)
  const font = select('Шрифт', fonts, Text.defaultProps.fontFamily)
  const fontSize = select('Размер', fontSizes, Text.defaultProps.fontSize)
  const fontWeight = select('Толщина', fontWeights, Text.defaultProps.fontWeight)

  return (
    <Column>
      <Layout mt={15} mx={20}>
        <Text fontSize='giant'>Текст</Text>
      </Layout>
      <Layout mt={15} mx={20}>
        <Text
          color={color}
          fontFamily={font}
          fontSize={fontSize}
          fontWeight={fontWeight}
          lineHeight={lineHeight}
        >
          {example}
        </Text>
      </Layout>
    </Column>
  )
}

TextStory.story = {
  name: 'Текст',
  decorators: [withKnobs],
}
