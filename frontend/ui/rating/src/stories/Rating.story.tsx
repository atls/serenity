import React, { useState }      from 'react'

import { Column, Layout, Text } from '@design/ui'

import { ActiveRating, Rating } from '..'

export default {
  title: 'Компоненты|Рейтинг',
}

export const Static = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Статичный</Text>
    </Layout>
    <Layout mt={15} mx={20}>
      <Rating rating={3} />
    </Layout>
  </Column>
)

export const Dynamic = () => {
  const [rating, setRating] = useState(3)

  return (
    <Column>
      <Layout mt={15} mx={20}>
        <Text fontSize='giant'>Изменяемый</Text>
      </Layout>
      <Layout mt={15} mx={20}>
        <ActiveRating rating={rating} onChange={setRating} />
      </Layout>
    </Column>
  )
}

Static.story = {
  name: 'Статичный',
}

Dynamic.story = {
  name: 'Изменяемый',
}
