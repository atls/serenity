import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateUploadInput {
  @Field()
  name: string

  @Field()
  type: string
}
