import { Field }       from '@nestjs/graphql'
import { ObjectType }  from '@nestjs/graphql'

import { UploadField } from './UploadField.js'

@ObjectType()
export class Upload {
  @Field()
  id: string

  @Field()
  url: string

  @Field((type) => [UploadField])
  fields: UploadField[]
}
