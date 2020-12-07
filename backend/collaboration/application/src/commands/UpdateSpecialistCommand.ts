import { IsEnum, IsUUID } from 'class-validator'

import { FormOfWork }     from '@collaboration/domain'

export class UpdateSpecialistCommand {
  @IsUUID('4')
  id: string

  @IsEnum(FormOfWork)
  formOfWork: FormOfWork

  numberOfEmployees: string

  companyName: string

  description: string

  mainSpecialisation: string[]

  additionalSpecialisation: string[]
}
