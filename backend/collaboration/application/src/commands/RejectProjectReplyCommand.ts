import { IsNotEmpty } from 'class-validator'
import { IsUUID }     from 'class-validator'

export class RejectProjectReplyCommand {
  @IsNotEmpty()
  projectId: string

  @IsUUID('4')
  specialistId: string
}
