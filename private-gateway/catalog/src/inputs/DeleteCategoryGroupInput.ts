import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class DeleteCategoryGroupInput {
  @Field()
  id: string
}
