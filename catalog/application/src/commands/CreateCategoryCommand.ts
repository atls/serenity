import { IsUUID }    from 'class-validator'
import { MinLength } from 'class-validator'
import uuid          from 'uuid/v4'

export class CreateCategoryCommand {
  id: string = uuid()

  @MinLength(1)
  name: string

  @IsUUID('4')
  groupId: string
}
