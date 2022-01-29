import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class CompleteProjectInput {
  @Field((type) => ID)
  projectId: string

  @Field()
  rating: number

  @Field()
  comment: string
}
