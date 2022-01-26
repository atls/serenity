import React              from 'react'
import styled             from '@emotion/styled'

import { Prefix, Suffix } from './PrefixSuffix'

const Container = styled.span({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  width: '100%',
})

export const Attachments = ({ size, prefix, suffix, children }: any) => {
  if (!prefix && !suffix) {
    return children
  }

  return (
    <Container>
      {prefix && <Prefix size={size}>{prefix}</Prefix>}
      {children}
      {suffix && <Suffix size={size}>{suffix}</Suffix>}
    </Container>
  )
}
