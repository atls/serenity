import React         from 'react'

import { CheckIcon } from '@ui/icons'
import { Text }      from '@ui/text'

import { Button }    from './Button'

export const CheckButton = ({ active = false, name, text, onClick }) => (
  <Button
    size='huge'
    borderRadius='4px'
    justifyContent='flex-start'
    fill
    onClick={() => onClick(name)}
  >
    <CheckIcon width={18} height={18} color={active ? '#000000' : '#999999'} />
    <Text
      fontSize='tiny'
      fontWeight='semiBold'
      color={active ? 'black' : 'mountainmist'}
      lineHeight='extra'
      whiteSpace='normal'
      textAlign='left'
    >
      {text}
    </Text>
  </Button>
)
