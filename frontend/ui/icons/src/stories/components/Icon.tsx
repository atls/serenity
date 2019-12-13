import React               from 'react'

import { Container, Text } from '@design/ui'

export const Icon = ({ name, icon: IconComponent }) => (
  <Container alignItems='center'>
    <IconComponent width={120} height={120} />
    <Text mt='10px' fontWeight='medium'>
      {name}
    </Text>
  </Container>
)
