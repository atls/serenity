import { boxShadow }   from 'styled-system'
import React           from 'react'

import styled          from '@emotion/styled'

import { StyledInput } from './parts/index.js'

const Input = ({ onChange, ...props }) => (
  <StyledInput {...props} onChange={({ target: { value } }) => onChange && onChange(value)} />
)

const Textarea = styled(Input)(
  () => ({
    padding: '17px 20px',
    resize: 'none',
    height: 'auto',
  }),
  boxShadow
)

Textarea.defaultProps = {
  ...StyledInput.defaultProps,
  as: 'textarea',
  size: 'normal',
}

export { Textarea }
