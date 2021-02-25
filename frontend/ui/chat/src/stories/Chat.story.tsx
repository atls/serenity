import React                    from 'react'

import { Column, Layout, Text } from '@design/ui'

import { Chat }                 from '../Chat'
import { ChatButton }           from '../ChatButton'

export default {
  title: 'Компоненты|Чат',
}

const data = [
  {
    id: '1',
    recipient: {
      profile: {
        personalInformation: {
          firstName: 'SFirstName',
          lastName: 'SLastName',
        },
      },
    },
    messages: [
      {
        id: '1.1',
        content: 'test',
      },
      {
        id: '1.2',
        content: 'test',
      },
      {
        id: '1.3',
        content: 'test',
        member: {
          id: 'memberId',
        },
      },
    ],
  },
  {
    id: '2',
    recipient: {
      profile: {
        personalInformation: {
          firstName: 'SFirstName',
          lastName: 'SLastName',
        },
      },
    },
    messages: [
      {
        id: '2.1',
        content: 'Здравствуйте! Нам срочно нужен плиточник!',
      },
      {
        id: '2.2',
        content: 'Как у вас со временем?',
      },
      {
        id: '2.3',
        content: 'Здравствуйте! Чем я могу вам помочь?',
        member: {
          id: 'memberId',
        },
      },
    ],
  },
]

export const ChatStory = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Окно чата</Text>
    </Layout>
    <Layout mt={15} ml={20}>
      <Chat discussions={data} />
    </Layout>
  </Column>
)

export const ChatButtonStory = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Кнопка чата</Text>
    </Layout>
    <Layout mt={15} ml={20}>
      <ChatButton />
    </Layout>
  </Column>
)

ChatStory.story = {
  name: 'Окно чата',
}

ChatButtonStory.story = {
  name: 'Кнопка чата',
}
