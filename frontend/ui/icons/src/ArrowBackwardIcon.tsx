/* eslint-disable */
import React from 'react'
export const ArrowBackwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' fill='none' {...props}>
    <mask
      id='ArrowBackwardIcon'
      mask-type='alpha'
      maskUnits='userSpaceOnUse'
      x={4}
      y={4}
      width={16}
      height={16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.4142 5.41425L12 4L4 12L12 20L13.4142 18.5858L7.81634 13H20V11H7.81635L13.4142 5.41425Z'
        fill='white'
      />
    </mask>
    <g mask='url(#ArrowBackwardIcon)'>
      <rect x={-28} y={-28} width={80} height={80} fill={props.color || 'rgb(153, 153, 153)'} />
    </g>
  </svg>
)
