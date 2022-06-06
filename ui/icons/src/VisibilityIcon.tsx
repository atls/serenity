import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const VisibilityIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg width='1em' height='1em' viewBox='0 0 16 10' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g
        stroke='none'
        strokeWidth={1}
        fill='none'
        fillRule='evenodd'
        transform='translate(0.000000, -3.000000)'
      >
        <polygon points='0 0 16 0 16 16 0 16' />
        <path
          d='M8,3 C4.66666667,3 1.82,5.07333333 0.666666667,8 C1.82,10.9266667 4.66666667,13 8,13 C11.3333333,13 14.18,10.9266667 15.3333333,8 C14.18,5.07333333 11.3333333,3 8,3 Z M8,11.3333333 C6.16,11.3333333 4.66666667,9.84 4.66666667,8 C4.66666667,6.16 6.16,4.66666667 8,4.66666667 C9.84,4.66666667 11.3333333,6.16 11.3333333,8 C11.3333333,9.84 9.84,11.3333333 8,11.3333333 Z M8,6 C6.89333333,6 6,6.89333333 6,8 C6,9.10666667 6.89333333,10 8,10 C9.10666667,10 10,9.10666667 10,8 C10,6.89333333 9.10666667,6 8,6 Z'
          fill='#999999'
          fillRule='nonzero'
        />
      </g>
    </svg>
  )
}
