import { MinLength } from 'class-validator'
import uuid          from 'uuid/v4.js'

export class CreateCategoryGroupCommand {
  id: string = uuid()

  @MinLength(1)
  name: string
}
