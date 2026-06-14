import { color }      from 'styled-system'
import { space }      from 'styled-system'
import { system }     from 'styled-system'
import { typography } from 'styled-system'

import styled         from '@emotion/styled'

const textDefaultProps = {
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontSize: 'normal',
}

export const Text = Object.assign(
  styled.span(
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
  ),
  {
    defaultProps: textDefaultProps,
  }
)
