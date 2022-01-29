import styled    from '@emotion/styled'

import React     from 'react'

import { Addon } from './Addon'

const Container = styled.div({
  width: '100%',
  display: 'flex',
})

export const Addons = ({ size, addonBefore, addonAfter, children }: any) => {
  if (!addonBefore && !addonAfter) {
    return children
  }

  return (
    <Container>
      {addonBefore && <Addon size={size}>{addonBefore}</Addon>}
      {children}
      {addonAfter && (
        <Addon position='after' size={size}>
          {addonAfter}
        </Addon>
      )}
    </Container>
  )
}
