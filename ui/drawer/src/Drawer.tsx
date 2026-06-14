import type { ReactNode } from 'react'
import React           from 'react'

import { css }         from '@emotion/react'
import styled          from '@emotion/styled'

import ReactDragDrawer from './drag/index.js'

const DragDrawer: any = ReactDragDrawer

const Container = (fill: boolean) =>
  css({
    minHeight: '100%',
    width: fill ? '100%' : 'calc(100% - 80px)',
    alignSelf: 'flex-start',
    position: 'absolute',
    left: 0,
  })

const StyledDrawer = styled.div({
  width: '100%',
  minHeight: '100%',
  position: 'absolute',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
})

const doNothing = () => {
  // do nothing
}

interface DrawerProps {
  children?: ReactNode
  fill?: boolean
  direction?: string
  visible?: boolean
  onClose?: () => void
  disable?: boolean
}

export const Drawer = ({
  children,
  fill = false,
  direction = 'left',
  visible = false,
  onClose = doNothing,
  disable = false,
}: DrawerProps) => (
  <DragDrawer
    open={visible}
    direction={direction}
    modalElementClass={Container(fill)}
    disable={disable}
    onRequestClose={() => {
      onClose()
    }}
  >
    <StyledDrawer>{children}</StyledDrawer>
  </DragDrawer>
)
