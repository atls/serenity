import React, { createContext } from 'react'

import { ChatStore }            from './ChatStore'

export const ChatContext = createContext(new ChatStore())

export const { Provider, Consumer } = ChatContext

export class ChatProvider extends React.Component {
  store: ChatStore

  constructor(props) {
    super(props)

    this.store = new ChatStore()
  }

  render() {
    const { children } = this.props
    return <Provider value={this.store}>{children}</Provider>
  }
}
