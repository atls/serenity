import { IsNotEmpty, MinLength } from 'class-validator'

import messages                  from '../messages'
import { IsFieldEqual }          from '../constraints'

export class ChangePasswordCommand {
  @IsNotEmpty()
  token: string

  @MinLength(5, {
    message: messages.minLength.defaultMessage,
  })
  password: string

  @IsFieldEqual('password', {
    message: messages.doNotMatch.defaultMessage,
  })
  confirmPassword: string
}
