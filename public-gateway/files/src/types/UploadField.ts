import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UploadField {
  @Field()
  key: string

  @Field()
  value: string
}
