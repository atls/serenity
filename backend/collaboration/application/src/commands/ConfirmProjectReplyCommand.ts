import { IsNotEmpty } from 'class-validator'
import { IsUUID }     from 'class-validator'

export class ConfirmProjectReplyCommand {
  @IsNotEmpty()
  projectId: string

  @IsUUID('4')
  specialistId: string
}
