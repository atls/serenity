import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Photo {
  @Field()
  id: string

  @Field()
  url: string
}
