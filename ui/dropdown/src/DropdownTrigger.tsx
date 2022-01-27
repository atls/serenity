import styled  from '@emotion/styled'

import Trigger from 'rc-trigger'
import React   from 'react'

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

DropdownTrigger.defaultProps = {
  menu: {},
}
