import uuid          from 'uuid/v4'
import { MinLength } from 'class-validator'

export class CreateCategoryGroupCommand {
  id: string = uuid()

  @MinLength(1)
  name: string
}
