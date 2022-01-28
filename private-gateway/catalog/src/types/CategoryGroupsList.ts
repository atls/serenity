import { Field, ObjectType } from 'type-graphql'

import { CategoryGroup } from './CategoryGroup'

@ObjectType()
export class CategoryGroupsList {
  @Field(type => [CategoryGroup])
  rows: CategoryGroup[]
}
