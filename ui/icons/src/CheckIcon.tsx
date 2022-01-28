import React from 'react'
export const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    stroke="{props.color || '#000000'} // eslint-disable react/destructuring-assignment"
    strokeWidth={2}
    strokeLinecap='butt'
    strokeLinejoin='miter'
    {...props}
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
)
