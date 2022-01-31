import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class DeleteCategoryInput {
  @Field()
  id: string
}
