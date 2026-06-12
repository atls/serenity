import { color }    from 'styled-system'
import { flexbox }  from 'styled-system'
import { layout }   from 'styled-system'
import { position } from 'styled-system'
import { space }    from 'styled-system'
import { system }   from 'styled-system'

import styled       from '@emotion/styled'

const boxSizing = system({
  boxSizing: true,
})

export const Column = Object.assign(styled.div(layout, space, flexbox, position, boxSizing), {
  defaultProps: {
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
  },
})

export const Row = Object.assign(styled.div(layout, space, flexbox, position, boxSizing), {
  defaultProps: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
  },
})

export const Layout = Object.assign(styled.div(layout, space, flexbox, position, color, boxSizing), {
  defaultProps: {
    display: 'flex',
  },
})
