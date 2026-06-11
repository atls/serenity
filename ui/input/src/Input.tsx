import React           from 'react'

import { Addons }      from './parts/index.js'
import { Attachments } from './parts/index.js'
import { StyledInput } from './parts/index.js'
import { useHooks }    from './hooks/index.js'

const Input = (props: any) => {
  const hooksProps = useHooks(props)
  const finalProps = { ...props, ...hooksProps }

  return (
    <Addons {...finalProps}>
      <Attachments {...finalProps}>
        <StyledInput {...finalProps} />
      </Attachments>
    </Addons>
  )
}

Input.defaultProps = {
  size: 'normal',
}

export { Input }
