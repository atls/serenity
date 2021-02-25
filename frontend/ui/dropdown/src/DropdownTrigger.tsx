import Trigger from 'rc-trigger'
import React   from 'react'
import styled  from '@emotion/styled'

interface DropdownItemProps {
  menu?: any
  children: any
}

const DropdownItemStyled = styled.div({
  display: 'flex',
  cursor: 'pointer',
  position: 'relative',
})

export const DropdownTrigger = ({ menu, children }: DropdownItemProps) => (
  <Trigger action={['click']} popup={menu} destroyPopupOnHide popupAlign={{ points: ['tr', 'br'] }}>
    <DropdownItemStyled>{children}</DropdownItemStyled>
  </Trigger>
)
