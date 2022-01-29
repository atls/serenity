import { IsUUID }    from 'class-validator'
import { MinLength } from 'class-validator'

export class UpdateCategoryCommand {
  @IsUUID('4')
  id: string

  @MinLength(1)
  name: string
}
