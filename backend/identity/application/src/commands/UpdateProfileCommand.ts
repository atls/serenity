import { IsMobilePhone, IsNotEmpty, IsOptional } from 'class-validator'

import messages                                  from '../messages'

export class UpdateProfileCommand {
  @IsNotEmpty()
  id: string

  @IsOptional()
  @IsMobilePhone('ru-RU', {
    message: messages.invalidPhone.defaultMessage,
  })
  readonly phone: string
}
