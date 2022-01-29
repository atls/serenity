import React            from 'react'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Input }        from './Input'

const doNothing = (...args) => {
  // do nothing
}

const mask = createNumberMask({
  prefix: '',
  suffix: ' ₽',
  thousandsSeparatorSymbol: ' ',
})

export const PriceInput = ({ onChange = doNothing, ...props }) => {
  const onChangeFormatted = (value) => {
    onChange(typeof value === 'string' ? Number(value.replace(/\s|₽/g, '')) : value)
  }

  return <Input onChange={onChangeFormatted} mask={mask} {...props} />
}
