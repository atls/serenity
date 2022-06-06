import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCategoryGroupInput {
  @Field()
  id: string

  @Field()
  name: string
}
