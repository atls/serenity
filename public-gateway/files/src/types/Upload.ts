import { Field, ObjectType } from '@nestjs/graphql'

import { UploadField } from './UploadField'

@ObjectType()
export class Upload {
  @Field()
  id: string

  @Field()
  url: string

  @Field(type => [UploadField])
  fields: UploadField[]
}
