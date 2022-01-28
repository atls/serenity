import { IsNotEmpty } from 'class-validator'

export class PublishProjectCommand {
  @IsNotEmpty()
  projectId: string
}
