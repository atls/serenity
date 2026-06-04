import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class DeleteCategoryErrors {
  @Field({ nullable: true })
  id?: string
}
