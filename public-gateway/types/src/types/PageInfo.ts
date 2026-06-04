import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class PageInfo {
  @Field()
  hasNext: boolean
}
