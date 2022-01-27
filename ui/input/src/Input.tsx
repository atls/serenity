import React           from 'react'

import { Addons }      from './parts'
import { Attachments } from './parts'
import { StyledInput } from './parts'
import { useHooks }    from './hooks'

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
