import { IsUUID }    from 'class-validator'
import { MinLength } from 'class-validator'
import uuid          from 'uuid/v4'

export class CreatePortfolioCommand {
  id: string = uuid()

  @IsUUID('4')
  userId: string

  @MinLength(1)
  name: string

  images: string[]
}
