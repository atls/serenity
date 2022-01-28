import { Field, ObjectType } from 'type-graphql'

import { Category } from './Category'

@ObjectType()
export class CategoriesList {
  @Field(type => [Category])
  rows: Category[]
}
