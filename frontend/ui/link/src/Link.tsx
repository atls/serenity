import styled   from '@emotion/styled'

import { Text } from '@ui/text'

export const Link = styled<any>(Text.withComponent('a'))({
  textDecoration: 'none',
  cursor: 'pointer',
})

Link.defaultProps = Text.defaultProps
