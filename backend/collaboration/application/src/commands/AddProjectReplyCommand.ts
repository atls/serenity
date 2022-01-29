import { IsNotEmpty } from 'class-validator'
import { IsUUID }     from 'class-validator'

export class AddProjectReplyCommand {
  @IsNotEmpty()
  projectId: string

  @IsUUID('4')
  specialistId: string

  @IsNotEmpty()
  message: string
}
