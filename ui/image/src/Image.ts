import { ImgHTMLAttributes } from 'react'
import type { Key }          from 'react'
import { LayoutProps }       from 'styled-system'
import { SpaceProps }        from 'styled-system'
import { createElement }     from 'react'
import { layout }            from 'styled-system'
import { space }             from 'styled-system'
import { system }            from 'styled-system'

import styled                from '@emotion/styled'

interface ImageProps
  extends SpaceProps,
    Omit<ImgHTMLAttributes<any>, 'width' | 'height'>,
    LayoutProps {
  pointerEvents?: string
  cursor?: string
  height?: any
  key?: Key
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
