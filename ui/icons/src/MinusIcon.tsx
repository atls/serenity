import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const MinusIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#999999'
      strokeWidth={2}
      strokeLinecap='butt'
      strokeLinejoin='bevel'
      {...props}
    >
      <line x1={5} y1={12} x2={19} y2={12} />
    </svg>
  )
}
