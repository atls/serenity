import styled        from '@emotion/styled'

import { border }    from 'styled-system'
import { boxShadow } from 'styled-system'
import { color }     from 'styled-system'
import { flexbox }   from 'styled-system'
import { layout }    from 'styled-system'
import { position }  from 'styled-system'
import { space }     from 'styled-system'
import { system }    from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
