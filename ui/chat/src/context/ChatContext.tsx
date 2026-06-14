import { createContext } from 'react'
import type { PropsWithChildren } from 'react'
import React             from 'react'

import { ChatStore }     from './ChatStore.js'

export const ChatContext = createContext(new ChatStore())

export const { Provider, Consumer } = ChatContext

export class ChatProvider extends React.Component<PropsWithChildren> {
  store: ChatStore

  constructor(props: PropsWithChildren) {
    super(props)

    this.store = new ChatStore()
  }

  render() {
    const { children } = this.props
    return <Provider value={this.store}>{children}</Provider>
  }
}
