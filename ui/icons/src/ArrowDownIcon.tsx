import { useTheme }  from '@emotion/react'

/* eslint-disable */
import React         from 'react'

import { IconProps } from '../icons.interfaces'

export const ArrowDownIcon = (props: IconProps) => {
  const theme: any = useTheme()
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 8 6'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      {...props}
    >
      <g id='Page-1' stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
        <g
          id='order-(executor)'
          transform='translate(-270.000000, -25.000000)'
          fill={theme.colors[props.color] || props.color || '#FFFFFF'}
          fillRule='nonzero'
        >
          <g id='nav-bar'>
            <g id='service-catalog' transform='translate(152.000000, 8.000000)'>
              <g
                id='baseline-keyboard_arrow_down-24px'
                transform='translate(114.000000, 12.000000)'
              >
                <polygon
                  id='Path'
                  points='4.94 5.72666667 8 8.78 11.06 5.72666667 12 6.66666667 8 10.6666667 4 6.66666667'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
