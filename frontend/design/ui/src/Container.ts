import { flexbox, layout, space } from 'styled-system'

import styled                     from '@emotion/styled'

export const Container = styled.div(layout, space, flexbox)

Container.defaultProps = {
  flexDirection: 'column',
  display: 'flex',
  mx: 10,
  my: 20,
}
