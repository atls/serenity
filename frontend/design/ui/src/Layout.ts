import styled                     from '@emotion/styled'
import { flexbox, layout, space } from 'styled-system'

export const Column = styled.div(layout, space, flexbox)

Column.defaultProps = {
  flexDirection: 'column',
  display: 'flex',
}

export const Row = styled.div(layout, space, flexbox)

Row.defaultProps = {
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div(layout, space, flexbox)

Layout.defaultProps = {
  display: 'flex',
}
