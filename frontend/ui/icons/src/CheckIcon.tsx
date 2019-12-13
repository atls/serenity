/* eslint-disable */
import React from 'react'
export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    stroke={props.color || 'rgb(0, 0, 0)'}
    strokeWidth={2}
    strokeLinecap='butt'
    strokeLinejoin='miter'
    {...props}
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
)
