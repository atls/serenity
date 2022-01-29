import React             from 'react'
import { createContext } from 'react'

import { DrawerStore }   from './DrawerStore'

export const DrawerContext = createContext(new DrawerStore())

export const { Provider, Consumer } = DrawerContext

export class DrawerProvider extends React.Component {
  store: DrawerStore

  constructor(props) {
    super(props)

    this.store = new DrawerStore()
  }

  render() {
    const { children } = this.props
    return <Provider value={this.store}>{children}</Provider>
  }
}
