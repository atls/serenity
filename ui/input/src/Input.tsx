import React           from 'react'

import { Addons }      from './parts/index.js'
import { Attachments } from './parts/index.js'
import { StyledInput } from './parts/index.js'
import { useHooks }    from './hooks/index.js'

const Input = ({ size = 'normal', ...props }: any) => {
  const inputProps = { size, ...props }
  const hooksProps = useHooks(inputProps)
  const finalProps = { ...inputProps, ...hooksProps }

  return (
    <Addons {...finalProps}>
      <Attachments {...finalProps}>
        <StyledInput {...finalProps} />
      </Attachments>
    </Addons>
  )
}

export { Input }
