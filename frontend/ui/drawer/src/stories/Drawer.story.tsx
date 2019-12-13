import React, { useState }      from 'react'

import { Column, Layout, Text } from '@design/ui'
import { Button }               from '@ui/button'
import { ArrowRightIcon }       from '@ui/icons'

import { Drawer, Item }         from '..'

export default {
  title: 'Компоненты|Мобильное меню',
}

export const DrawerStory = () => {
  const [active, setActive] = useState(false)

  return (
    <Column>
      <Layout mt={15} mx={20}>
        <Text fontSize='giant'>Мобильное меню</Text>
      </Layout>
      <Layout mt={15} mx={20}>
        <Button color='stormdust' onClick={() => setActive(!active)}>
          Открыть меню
        </Button>
      </Layout>
      <Drawer visible={active} onClose={() => setActive(!active)}>
        <Item icon={<ArrowRightIcon color='rgb(102,102,102)' />} onClick={() => {}}>
          каталог услуг
        </Item>
        <Item href='#'>специалисты</Item>
        <Item href='#'>заказы</Item>
      </Drawer>
    </Column>
  )
}

DrawerStory.story = {
  name: 'Мобильное меню',
}
