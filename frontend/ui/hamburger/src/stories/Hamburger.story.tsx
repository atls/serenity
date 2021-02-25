import React, { useState }      from 'react'

import { Column, Layout, Text } from '@design/ui'

import { Hamburger }            from '../Hamburger'

export default {
  title: 'Компоненты|Гамбургер',
}

export const HamburgerStory = () => {
  const [active, setActive] = useState(false)

  return (
    <Column>
      <Layout mt={15} mx={20}>
        <Text fontSize='giant'>Гамбургер</Text>
      </Layout>
      <Layout mt={15} mx={20}>
        <Hamburger
          active={active}
          onOpen={() => setActive(!active)}
          onClose={() => setActive(!active)}
        />
      </Layout>
    </Column>
  )
}

HamburgerStory.story = {
  name: 'Гамбургер',
}
