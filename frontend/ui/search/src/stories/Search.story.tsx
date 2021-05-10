import React, { useState }      from 'react'

import { Column, Layout, Text } from '@design/ui'

import { Option, Search }       from '..'

export default {
  title: 'Компоненты|Поиск',
}

export const SearchStory = () => {
  const [data, setData] = useState([])

  const onChangeSearch = value => {
    const options = []
    if (value) {
      options.push({ value: `${value} first`, name: `${value} first` })
      options.push({ value: `${value} second`, name: `${value} second` })
    }
    setData(options)
  }

  return (
    <Column>
      <Layout mt={15} mx={20}>
        <Text fontSize='giant'>Поиск</Text>
      </Layout>
      <Layout mt={15} mx={20} maxWidth={400}>
        <Search onSearch={onChangeSearch} placeholder='Placeholder' size='large'>
          {data.map(item => (
            <Option key={item.value} value={item.value} label={item.name}>
              {item.name}
            </Option>
          ))}
        </Search>
      </Layout>
    </Column>
  )
}

SearchStory.story = {
  name: 'Поиск',
}
