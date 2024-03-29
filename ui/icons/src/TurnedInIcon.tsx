import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const TurnedInIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14.167 2.5H5.83366C4.91699 2.5 4.17533 3.25 4.17533 4.16667L4.16699 17.5L10.0003 15L15.8337 17.5V4.16667C15.8337 3.25 15.0837 2.5 14.167 2.5Z'
        fill='#999999'
      />
    </svg>
  )
}
