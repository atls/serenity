import { IsUUID } from 'class-validator'

export class ConfirmUploadCommand {
  @IsUUID('4')
  id: string
}
