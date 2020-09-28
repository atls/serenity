import { Field, ObjectType } from 'type-graphql'

import { Upload } from './Upload'

@ObjectType()
export class CreateUploadResponse {
  @Field(type => Upload)
  result: Upload
}
