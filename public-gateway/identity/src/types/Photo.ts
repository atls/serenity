import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Photo {
  @Field()
  id: string

  @Field()
  url: string
}
