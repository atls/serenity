import React from 'react'

export const Space = ({ count = 1 }) => (
  <span style={{ display: 'inline-flex' }}>{'\u00A0'.repeat(count)}</span>
)
