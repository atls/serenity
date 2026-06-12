import { createContext } from 'react'
import type { PropsWithChildren } from 'react'
import React             from 'react'

import { DrawerStore }   from './DrawerStore.js'

export const DrawerContext = createContext(new DrawerStore())

export const { Provider, Consumer } = DrawerContext

export class DrawerProvider extends React.Component<PropsWithChildren> {
  store: DrawerStore

  constructor(props: PropsWithChildren) {
    super(props)

    this.store = new DrawerStore()
  }

  render() {
    const { children } = this.props
    return <Provider value={this.store}>{children}</Provider>
  }
}
