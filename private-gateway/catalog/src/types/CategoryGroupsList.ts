import { Field }         from '@nestjs/graphql'
import { ObjectType }    from '@nestjs/graphql'

import { CategoryGroup } from './CategoryGroup'

@ObjectType()
export class CategoryGroupsList {
  @Field((type) => [CategoryGroup])
  rows: CategoryGroup[]
}
