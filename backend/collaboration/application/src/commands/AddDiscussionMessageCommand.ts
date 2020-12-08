import { IsNotEmpty, IsUUID } from 'class-validator'

export class AddDiscussionMessageCommand {
  @IsUUID('4')
  specialistId: string

  @IsUUID('4')
  customerId: string

  @IsUUID('4')
  authorId: string

  @IsNotEmpty()
  message: string
}
