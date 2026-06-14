import { createElement } from 'react'
import type { ComponentProps } from 'react'
import { background } from 'styled-system'
import { layout }     from 'styled-system'
import { space }      from 'styled-system'

import styled         from '@emotion/styled'

const StyledPreviewImage = styled.div(
  ({ theme }) => ({
    width: 120,
    height: 120,
    border: theme.borders.gallery,
    boxSizing: 'border-box',
    display: 'flex',
    marginBottom: 10,
  }),
  layout,
  space,
  background
)

export const PreviewImage = (props: ComponentProps<typeof StyledPreviewImage>) =>
  createElement(StyledPreviewImage, {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    ...props,
  })

export const PreviewImageContainer = styled.div({
  boxSizing: 'border-box',
  flexDirection: 'column',
  display: 'flex',
  marginBottom: 15,
  marginRight: 24,
  '&:last-of-type': {
    marginRight: 0,
  },
})
