import styled                    from '@emotion/styled'
import { layout, space, system } from 'styled-system'

export const Image = styled.img(
  system({
    pointerEvents: true,
    cursor: true,
  }),
  layout,
  space,
)
