import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateCategoryGroupInput {
  @Field()
  name: string
}
