import { color, space, typography } from 'styled-system'

import styled                       from '@emotion/styled'

export const Text = styled.span(color, space, typography)

Text.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontSize: 'normal',
}
