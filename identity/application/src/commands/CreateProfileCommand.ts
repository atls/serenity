import { IsEnum }      from 'class-validator'
import { IsNotEmpty }  from 'class-validator'
import { MinLength }   from 'class-validator'

import { ProfileType } from '@identity/domain'

import messages        from '../messages'

export class CreateProfileCommand {
  @IsNotEmpty()
  id: string

  @IsEnum(ProfileType)
  type: ProfileType

  @MinLength(1, {
    message: messages.minLength.defaultMessage,
  })
  firstName: string

  @MinLength(1, {
    message: messages.minLength.defaultMessage,
  })
  lastName: string
}
