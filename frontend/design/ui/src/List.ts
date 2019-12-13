import styled              from '@emotion/styled'
import { flexbox, layout } from 'styled-system'

export const List = styled.div(layout, flexbox)

List.defaultProps = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}
