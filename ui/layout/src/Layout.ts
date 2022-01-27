import styled       from '@emotion/styled'

import { color }    from 'styled-system'
import { flexbox }  from 'styled-system'
import { layout }   from 'styled-system'
import { position } from 'styled-system'
import { space }    from 'styled-system'
import { system }   from 'styled-system'

const boxSizing = system({
  boxSizing: true,
})

export const Column = styled.div(layout, space, flexbox, position, boxSizing)

Column.defaultProps = {
  width: '100%',
  flexDirection: 'column',
  display: 'flex',
}

export const Row = styled.div(layout, space, flexbox, position, boxSizing)

Row.defaultProps = {
  width: '100%',
  flexDirection: 'row',
  display: 'flex',
}

export const Layout = styled.div(layout, space, flexbox, position, color, boxSizing)

Layout.defaultProps = {
  display: 'flex',
}
