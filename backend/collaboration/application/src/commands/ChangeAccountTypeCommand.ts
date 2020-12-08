import { IsEnum, IsUUID } from 'class-validator'

import { AccountType }    from '@collaboration/domain'

export class ChangeAccountTypeCommand {
  @IsUUID('4')
  specialistId: string

  @IsEnum(AccountType)
  type: AccountType
}
