import styled                from '@emotion/styled'

import { ImgHTMLAttributes } from 'react'
import { LayoutProps }       from 'styled-system'
import { SpaceProps }        from 'styled-system'
import { createElement }     from 'react'
import { layout }            from 'styled-system'
import { space }             from 'styled-system'
import { system }            from 'styled-system'

interface ImageProps
  extends SpaceProps,
    Omit<ImgHTMLAttributes<any>, 'width' | 'height'>,
    LayoutProps {
  pointerEvents?: string
  cursor?: string
  height?: any
  width?: any
}

const StyledImage = styled.img<any>(
  system({
    pointerEvents: true,
    cursor: true,
  }),
  layout,
  space
)

export const Image = (props: Partial<ImageProps>) => createElement(StyledImage, { ...props })
