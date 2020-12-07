import { IsUUID } from 'class-validator'

export class ChooseSpecialistCommand {
  @IsUUID('4')
  replyId: string
}
