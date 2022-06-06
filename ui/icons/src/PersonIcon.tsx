import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const PersonIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg width='1em' height='1em' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g
        stroke='none'
        strokeWidth={1}
        fill='none'
        fillRule='evenodd'
        transform='translate(-2.000000, -2.000000)'
      >
        <path
          d='M8,8 C9.47333333,8 10.6666667,6.80666667 10.6666667,5.33333333 C10.6666667,3.86 9.47333333,2.66666667 8,2.66666667 C6.52666667,2.66666667 5.33333333,3.86 5.33333333,5.33333333 C5.33333333,6.80666667 6.52666667,8 8,8 Z M8,9.33333333 C6.22,9.33333333 2.66666667,10.2266667 2.66666667,12 L2.66666667,13.3333333 L13.3333333,13.3333333 L13.3333333,12 C13.3333333,10.2266667 9.78,9.33333333 8,9.33333333 Z'
          id='Shape'
          fill='#999999'
          fillRule='nonzero'
        />
        <polygon points='0 0 16 0 16 16 0 16' />
      </g>
    </svg>
  )
}
