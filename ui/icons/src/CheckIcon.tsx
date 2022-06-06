import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'
export const CheckIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='none'
      stroke={theme.colors[props.color] || props.color || '#000000'}
      strokeWidth={2}
      strokeLinecap='butt'
      strokeLinejoin='miter'
      {...props}
    >
      <polyline points='20 6 9 17 4 12' />
    </svg>
  )
}
