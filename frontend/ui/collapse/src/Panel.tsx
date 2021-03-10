import React                from 'react'
import { Panel as RcPanel } from 'rc-collapse'

export const Panel = ({ children, check, header, ...props }: any) => (
  <RcPanel header={<div style={{ order: 1 }}>{header}</div>} extra={check} {...props}>
    {children}
  </RcPanel>
)
