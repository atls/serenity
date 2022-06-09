import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const SendIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg width='1em' height='1em' viewBox='0 0 19 16' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
        <g transform='translate(-1, -2)' fill='#999999' fillRule='nonzero'>
          <polygon points='1.675 17.5 19.1666667 10 1.675 2.5 1.66666667 8.33333333 14.1666667 10 1.66666667 11.6666667' />
        </g>
      </g>
    </svg>
  )
}
