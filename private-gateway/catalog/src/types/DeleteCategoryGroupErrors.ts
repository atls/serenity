import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DeleteCategoryGroupErrors {
  @Field({ nullable: true })
  id?: string
}
