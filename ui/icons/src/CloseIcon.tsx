import React from 'react'
export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd' transform='translate(-8, -8)'>
      <polygon
        fill="{props.color || '#FFFFFF'} // eslint-disable react/destructuring-assignment"
        fillRule='nonzero'
        points='31.6666667 10.6833333 29.3166667 8.33333333 20 17.65 10.6833333 8.33333333 8.33333333 10.6833333 17.65 20 8.33333333 29.3166667 10.6833333 31.6666667 20 22.35 29.3166667 31.6666667 31.6666667 29.3166667 22.35 20'
      />
      <polygon points='0 0 40 0 40 40 0 40' />
    </g>
  </svg>
)
