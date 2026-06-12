import RcSelect                from 'rc-select'
import type { ReactNode }      from 'react'
import React                   from 'react'

import { ArrowDownIcon }       from '@ui/icons'

import { dropdownStyles }      from './styles.js'
import { selectRoundedStyles } from './styles.js'
import { selectStyles }        from './styles.js'

interface SelectProps {
  [key: string]: any
  children?: ReactNode
  invalid?: boolean
  multiple?: boolean
  rounded?: boolean
}

export const Select = ({
  children,
  invalid = false,
  multiple = false,
  rounded = false,
  ...props
}: SelectProps) => (
  <RcSelect
    className={`${selectStyles} ${rounded ? selectRoundedStyles : ''}`}
    // @ts-ignore
    dropdownClassName={dropdownStyles.name}
    showSearch={false}
    multiple={multiple}
    showArrow
    inputIcon={<ArrowDownIcon color='#999999' width={8} height={8} />}
    style={invalid ? { borderColor: 'rgb(236,27,52)' } : {}}
    {...props}
  >
    {children}
  </RcSelect>
)
