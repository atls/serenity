import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class CreatePortfolioInput {
  @Field()
  name: string

  @Field((type) => [ID])
  images: string[]
}
