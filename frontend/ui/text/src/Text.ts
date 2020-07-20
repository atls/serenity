import { color, space, system, typography } from 'styled-system'

import styled                               from '@emotion/styled'

export const Text = styled.span(
  system({
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
    textOverflow: true,
    cursor: true,
  }),
  color,
  space,
  typography
)

Text.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontSize: 'normal',
}
