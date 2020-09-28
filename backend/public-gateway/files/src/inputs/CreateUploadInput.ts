import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateUploadInput {
  @Field()
  name: string

  @Field()
  type: string
}
