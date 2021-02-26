import React, { useState }      from 'react'

import { Column, Layout, Text } from '@design/ui'
import { Button }               from '@ui/button'
import { SlideDrawer }          from '@ui/drawer'
import { Hamburger }            from '@ui/hamburger'

import { Listview }             from '../Listview'

export default {
  title: 'Компоненты|Список категорий',
}

const data = [
  {
    id: 'complexity',
    name: 'Комплексные работы',
    children: [
      {
        id: 'Home renovation',
        name: 'Ремонт дома',
        href: '#',
      },
      {
        id: 'Apartment renovation',
        name: 'Ремонт квартиры',
        href: '#',
      },
      {
        id: 'Apartment renovation',
        name: 'Ремонт квартиры',
        href: '#',
      },
    ],
  },
  {
    id: 'engineering',
    name: 'Инженерные системы',
    children: [
      {
        id: 'Apartment renovation',
        name: 'Ремонт квартиры',
        href: '#',
      },
      {
        id: 'Home renovation',
        name: 'Ремонт дома',
        href: '#',
      },
    ],
  },
  {
    id: 'engineering',
    name: 'Инженерные систем',
    href: '#',
  },
]

export const ListviewStory = () => {
  const [active, setActive] = useState(false)

  return (
    <Column>
      <Layout mt={15} mx={20}>
        <Text fontSize='giant'>Список категорий</Text>
      </Layout>
      <Layout mt={15} ml={20}>
        <Button color='stormdust' onClick={() => setActive(!active)}>
          Открыть меню
        </Button>
      </Layout>
      <SlideDrawer visible={active} direction='bottom'>
        <Listview
          data={data}
          closeIcon={<Hamburger active={active} onClose={() => setActive(!active)} />}
        />
      </SlideDrawer>
    </Column>
  )
}

ListviewStory.story = {
  name: 'Список категорий',
}
