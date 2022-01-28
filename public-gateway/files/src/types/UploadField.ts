import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UploadField {
  @Field()
  key: string

  @Field()
  value: string
}
