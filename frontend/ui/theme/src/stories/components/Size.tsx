import React                      from 'react'

import { Container, Space, Text } from '@design/ui'

export const Size = ({ name, size }) => (
  <Container flexDirection='row' mr={20} my={10}>
    <Text fontWeight='medium' fontSize={size}>
      {name}
    </Text>
    <Space />
    <Text color='stardust' fontSize={size}>
      {size}
    </Text>
  </Container>
)
