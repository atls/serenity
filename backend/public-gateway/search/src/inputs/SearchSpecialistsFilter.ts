import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class SearchSpecialistsFilter {
  @Field((type) => ID, { nullable: true })
  specialisationId?: string
}
