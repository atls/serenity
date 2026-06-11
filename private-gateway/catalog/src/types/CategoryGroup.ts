import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Category }   from './Category.js'

@ObjectType()
export class CategoryGroup {
  @Field()
  id: string

  @Field()
  name: string

  @Field((type) => [Category])
  children: Category[]
}
