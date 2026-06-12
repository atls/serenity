import { styleFn }    from 'styled-system'
import { ifProp }     from 'styled-tools'
import { switchProp } from 'styled-tools'
import type { ReactNode } from 'react'
import React          from 'react'

import styled         from '@emotion/styled'

const base: styleFn = ({ theme }) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.colors.dimgray,
  zIndex: 10,
})

const sizes: styleFn = switchProp('size', {
  normal: {
    height: 56,
  },
})

const fixedPosition: styleFn = ifProp('fixed', { position: 'fixed' })

const Container = styled.div(
  {
    width: '100%',
  },
  sizes
)

const StyledNavigation = styled.div(base, sizes, fixedPosition)

interface NavigationProps {
  children?: ReactNode
  fixed?: boolean
  size?: string
}

const Navigation = ({ size = 'normal', fixed = true, children }: NavigationProps) => (
  <Container size={size}>
    <StyledNavigation fixed={fixed} size={size}>
      {children}
    </StyledNavigation>
  </Container>
)

export { Navigation }
