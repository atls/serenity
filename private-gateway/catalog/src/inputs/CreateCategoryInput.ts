import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string

  @Field()
  groupId: string
}
