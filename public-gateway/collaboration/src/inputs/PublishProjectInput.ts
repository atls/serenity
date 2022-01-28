import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class PublishProjectInput {
  @Field((type) => ID)
  projectId: string
}
