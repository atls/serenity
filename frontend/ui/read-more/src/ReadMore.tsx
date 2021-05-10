import styled              from '@emotion/styled'
import React, { useState } from 'react'

import { Column, Layout }  from '@ui/layout'

const ActiveItem = styled.span(({ theme }: any) => ({
  color: theme.colors.mountainmist,
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.regular,
  lineHeight: theme.lineHeights.medium,
  marginTop: 18,
  cursor: 'pointer',
  '&:hover': {
    color: theme.colors.silver,
  },
}))

const StyledText = styled.p(({ theme }: any) => ({
  color: theme.colors.black,
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.regular,
  lineHeight: theme.lineHeights.medium,
  margin: 0,
  marginTop: 18,
}))

export const ReadMore = ({ text, activeTitle, inactiveTitle = '' }) => {
  const [active, setActive] = useState(false)
  const index = text.slice(450).indexOf('.', '!', '?')

  if (index === -1) return <StyledText>{text}</StyledText>

  return (
    <Column>
      <Layout>
        <StyledText>{active ? text : text.slice(0, index + 451)}</StyledText>
      </Layout>
      <Layout>
        <ActiveItem onClick={() => setActive(!active)}>
          {active ? inactiveTitle || activeTitle : activeTitle}
        </ActiveItem>
      </Layout>
    </Column>
  )
}
