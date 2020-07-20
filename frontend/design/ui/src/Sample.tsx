import React                                from 'react'
import { border, boxShadow, color, layout } from 'styled-system'

import styled                               from '@emotion/styled'

import { Container }                        from './Container'
import { Text }                             from './Text'

const SampleBox = styled.div(layout, border, boxShadow, color)

SampleBox.defaultProps = {
  width: 130,
  height: 80,
}

export const Sample = ({ name = '', value = '', ...props }) => (
  <Container>
    <SampleBox {...props} />
    <Text mt='10px' fontWeight='medium'>
      {name}
    </Text>
    <Text mt='5px' color='stardust' fontSize='small'>
      {value}
    </Text>
  </Container>
)
