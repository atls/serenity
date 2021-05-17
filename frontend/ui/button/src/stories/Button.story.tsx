import React                               from 'react'

import { Column, Layout, List, Row, Text } from '@design/ui'
import { TurnedInIcon }                    from '@ui/icons'

import { Button, SwitchButton }            from '..'

export default {
  title: 'Компоненты|Кнопки',
}

export const Size = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Размер</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List justifyContent='start' width='100%'>
        <Layout>
          <Button size='large'>Large</Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button size='normal'>Normal</Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button size='small'>Small</Button>
        </Layout>
      </List>
    </Layout>
  </Column>
)

export const Color = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Цвет</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List justifyContent='start' width='100%'>
        <Layout>
          <Button color='chicago'>Chicago</Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button color='stormdust'>Stormdust</Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button color='white'>White</Button>
        </Layout>
      </List>
    </Layout>
  </Column>
)

export const Round = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Округление</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List justifyContent='start' width='100%'>
        <Layout>
          <Button borderRadius='large'>Large</Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button borderRadius='medium'>Medium</Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button size='small' borderRadius='small'>
            Small
          </Button>
        </Layout>
      </List>
    </Layout>
  </Column>
)

export const Fill = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Во всю ширину</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <Button fill>Fill</Button>
    </Layout>
  </Column>
)

export const Equal = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Квадратная</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <Button equal>Equal</Button>
    </Layout>
  </Column>
)

export const Icons = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Иконки</Text>
    </Layout>
    <Layout mt={15} mx={15}>
      <List justifyContent='start' width='100%'>
        <Layout>
          <Button>
            <TurnedInIcon width={15} height={15} /> Button with icon
          </Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button>
            Button with right icon
            <TurnedInIcon width={15} height={15} />
          </Button>
        </Layout>
        <Layout flexBasis={20} />
        <Layout>
          <Button equal borderRadius='large'>
            <TurnedInIcon width={15} height={15} />
          </Button>
        </Layout>
      </List>
    </Layout>
  </Column>
)

export const Switch = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Переключатель</Text>
    </Layout>
    <Layout my={15} mx={15}>
      <Row>
        <Layout flexBasis={500}>
          <SwitchButton value='customer' onChange={(f) => f}>
            <Button value='specialist'>Я исполнитель</Button>
            <Button value='customer'>Я заказчик</Button>
          </SwitchButton>
        </Layout>
      </Row>
    </Layout>
  </Column>
)

Size.story = {
  name: 'Размер',
}

Color.story = {
  name: 'Цвет',
}

Round.story = {
  name: 'Округление',
}

Fill.story = {
  name: 'Во всю ширину',
}

Equal.story = {
  name: 'Квадратная',
}

Icons.story = {
  name: 'Иконки',
}

Switch.story = {
  name: 'Переключатель',
}
