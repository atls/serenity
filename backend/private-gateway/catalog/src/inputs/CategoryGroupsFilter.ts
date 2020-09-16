import { Field, InputType } from 'type-graphql'

@InputType()
export class CategoryGroupsFilter {
  @Field({ nullable: true })
  search?: string
}
