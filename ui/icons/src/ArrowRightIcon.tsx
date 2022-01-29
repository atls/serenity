import React from 'react'
export const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    stroke="{props.color || '#FFFFFF'} // eslint-disable react/destructuring-assignment"
    strokeWidth={2}
    strokeLinecap='butt'
    strokeLinejoin='bevel'
    {...props}
  >
    <path d='M9 18l6-6-6-6' />
  </svg>
)
