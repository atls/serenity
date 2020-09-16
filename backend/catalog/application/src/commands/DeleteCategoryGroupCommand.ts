import { IsUUID } from 'class-validator'

export class DeleteCategoryGroupCommand {
  @IsUUID('4')
  id: string
}
