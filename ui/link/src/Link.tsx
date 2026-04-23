import { LinkHTMLAttributes } from 'react'

import { StyledComponent }    from '@emotion/styled'
import { Text }               from '@ui/text'
import styled                 from '@emotion/styled'

type TextProps = typeof Text.defaultProps

// @ts-ignore
export const Link = styled<StyledComponent<LinkHTMLAttributes<any>, TextProps, any>>(
  Text.withComponent('a')
)({
  textDecoration: 'none',
  cursor: 'pointer',
})

Link.defaultProps = Text.defaultProps
