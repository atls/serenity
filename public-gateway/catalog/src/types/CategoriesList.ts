import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Category }   from './Category'

@ObjectType()
export class CategoriesList {
  @Field((type) => [Category])
  rows: Category[]
}
