import { IsNotEmpty } from 'class-validator'
import { IsUUID }     from 'class-validator'

export class AddReplyMessageCommand {
  @IsUUID('4')
  replyId: string

  @IsUUID('4')
  authorId: string

  @IsNotEmpty()
  message: string
}
