import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { File }       from './File.js'

@ObjectType()
export class ConfirmUploadResponse {
  @Field((type) => File)
  result: File
}
