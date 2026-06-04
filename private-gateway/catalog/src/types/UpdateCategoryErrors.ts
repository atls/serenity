import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdateCategoryErrors {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  name?: string
}
