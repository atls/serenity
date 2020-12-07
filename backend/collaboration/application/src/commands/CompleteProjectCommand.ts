import { IsInt, IsNotEmpty, Max, Min } from 'class-validator'

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
