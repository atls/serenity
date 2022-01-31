import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UploadField {
  @Field()
  key: string

  @Field()
  value: string
}
