import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdateCategoryGroupErrors {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  name?: string
}
