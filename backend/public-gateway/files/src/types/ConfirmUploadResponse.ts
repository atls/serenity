import { Field, ObjectType } from 'type-graphql'

import { File } from './File'

@ObjectType()
export class ConfirmUploadResponse {
  @Field(type => File)
  result: File
}
