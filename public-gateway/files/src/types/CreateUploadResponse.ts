import { Field, ObjectType } from '@nestjs/graphql'

import { Upload } from './Upload'

@ObjectType()
export class CreateUploadResponse {
  @Field(type => Upload)
  result: Upload
}
