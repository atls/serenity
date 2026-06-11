import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Upload }     from './Upload.js'

@ObjectType()
export class CreateUploadResponse {
  @Field((type) => Upload)
  result: Upload
}
