import uuid          from 'uuid/v4'
import { MinLength } from 'class-validator'

export class CreateUploadCommand {
  id: string = uuid()

  @MinLength(1)
  type: string

  @MinLength(1)
  name: string
}
