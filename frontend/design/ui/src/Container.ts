import styled                     from '@emotion/styled'
import { flexbox, layout, space } from 'styled-system'

export const Container = styled.div(layout, space, flexbox)

Container.defaultProps = {
  flexDirection: 'column',
  display: 'flex',
  mx: 10,
  my: 20,
}
