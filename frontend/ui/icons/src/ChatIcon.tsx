/* eslint-disable */
import React from 'react'
export const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width='1em' height='1em' viewBox='0 0 20 20' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.33366 1.66669H16.667C17.5837 1.66669 18.3337 2.41669 18.3337 3.33335V13.3334C18.3337 14.25 17.5837 15 16.667 15H5.00033L1.66699 18.3334L1.67533 3.33335C1.67533 2.41669 2.41699 1.66669 3.33366 1.66669ZM15.0003 7.50002H5.00033V9.16669H15.0003V7.50002ZM11.667 11.6667H5.00033V10H11.667V11.6667ZM5.00033 6.66669H15.0003V5.00002H5.00033V6.66669Z'
      fill={props.color || 'rgb(255, 255, 255)'}
    />
  </svg>
)
