import { background } from 'styled-system'
import { layout }     from 'styled-system'
import { space }      from 'styled-system'
import { system }     from 'styled-system'

import styled         from '@emotion/styled'

export const BackgroundImage = styled.div(
  system({
    cursor: true,
  }),
  layout,
  space,
  background
)
