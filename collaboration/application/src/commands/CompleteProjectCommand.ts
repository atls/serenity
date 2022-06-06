import { IsInt }      from 'class-validator'
import { IsNotEmpty } from 'class-validator'
import { Max }        from 'class-validator'
import { Min }        from 'class-validator'

export class CompleteProjectCommand {
  @IsNotEmpty()
  projectId: string

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number

  @IsNotEmpty()
  comment: string
}
