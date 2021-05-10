import React                    from 'react'

import { Column, Layout, Text } from '@design/ui'

import { Option, Select }       from '..'

export default {
  title: 'Компоненты|Выпадающий список',
}

export const Single = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Одиночный выбор</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth={400}>
      <Select placeholder='Выберите'>
        <Option value='Вариант 1'>Вариант 1</Option>
        <Option value='Вариант 2'>Вариант 2</Option>
        <Option value='Вариант 3'>Вариант 3</Option>
        <Option value='Вариант 4'>Вариант 4</Option>
        <Option value='Вариант 5'>Вариант 5</Option>
        <Option value='Вариант 6'>Вариант 6</Option>
      </Select>
    </Layout>
  </Column>
)

export const Multiple = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Множественный выбор</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth={400}>
      <Select placeholder='Выберите' multiple>
        <Option value='Вариант 1'>Вариант 1</Option>
        <Option value='Вариант 2'>Вариант 2</Option>
        <Option value='Вариант 3'>Вариант 3</Option>
        <Option value='Вариант 4'>Вариант 4</Option>
        <Option value='Вариант 5'>Вариант 5</Option>
        <Option value='Вариант 6'>Вариант 6</Option>
      </Select>
    </Layout>
  </Column>
)

Single.story = {
  name: 'Одиночный выбор',
}

Multiple.story = {
  name: 'Множественный выбор',
}
