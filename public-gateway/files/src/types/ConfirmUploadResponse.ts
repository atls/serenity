import { Field, ObjectType } from '@nestjs/graphql'

import { File } from './File'

@ObjectType()
export class ConfirmUploadResponse {
  @Field(type => File)
  result: File
}
