import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field()
  id: string

  @Field()
  name: string
}
