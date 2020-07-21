import { flexbox, layout } from 'styled-system'

import styled              from '@emotion/styled'

export const List = styled.div(layout, flexbox)

List.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}
