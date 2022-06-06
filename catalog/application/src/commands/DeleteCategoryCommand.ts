import { IsUUID } from 'class-validator'

export class DeleteCategoryCommand {
  @IsUUID('4')
  id: string
}
