import styled                       from '@emotion/styled'
import { color, space, typography } from 'styled-system'

export const Text = styled.span(color, space, typography)

Text.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontSize: 'normal',
}
