import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreateCategoryGroupErrors {
  @Field({ nullable: true })
  name?: string
}
