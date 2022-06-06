import { Transform }     from 'class-transformer'
import { IsMobilePhone } from 'class-validator'
import { IsNotEmpty }    from 'class-validator'
import { IsOptional }    from 'class-validator'
import { IsUUID }        from 'class-validator'
import { IsUrl }         from 'class-validator'
import { MinLength }     from 'class-validator'

import messages          from '../messages'

export class UpdateProfileCommand {
  @IsNotEmpty()
  id: string

  @MinLength(1, {
    message: messages.minLength.defaultMessage,
  })
  firstName: string

  @MinLength(1, {
    message: messages.minLength.defaultMessage,
  })
  lastName: string

  @IsOptional()
  @IsMobilePhone('ru-RU', {
    // @ts-ignore
    message: messages.invalidPhone.defaultMessage,
  })
  readonly phone: string

  @IsOptional()
  @IsUUID('4')
  readonly photoId: string

  @IsOptional()
  @MinLength(1, {
    message: messages.minLength.defaultMessage,
  })
  address: string

  @IsOptional()
  @IsUrl()
  @Transform((value) => (value === '' ? null : value))
  website: string
}
