import React               from 'react'

import { Container, Text } from '@design/ui'

export const Garniture = ({ name, family, weight }) => (
  <Container flexDirection='row' mr={20} my={10}>
    <Text mt='10px' fontSize='25px' fontFamily={family} fontWeight={weight} lineHeight='normal'>
      {name}
    </Text>
  </Container>
)
