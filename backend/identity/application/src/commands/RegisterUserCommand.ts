import { IsMobilePhone, MinLength }        from 'class-validator'

import { User }                            from '@identity/persistence'

import messages                            from '../messages'
import { IsEntityNotExists, IsFieldEqual } from '../constraints'

export class RegisterUserCommand {
  @IsMobilePhone('ru-RU', {
    message: messages.invalidPhone.defaultMessage,
  })
  @IsEntityNotExists(
    {
      entity: User,
      field: '"invalidPhone"',
    },
    {
      message: messages.phoneAlreadyExists.defaultMessage,
    }
  )
  phone: string

  @MinLength(5, {
    message: messages.minLength.defaultMessage,
  })
  password: string

  @IsFieldEqual('password', {
    message: messages.doNotMatch.defaultMessage,
  })
  confirmPassword: string
}
