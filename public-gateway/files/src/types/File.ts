import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class File {
  @Field()
  id: string

  @Field()
  url: string
}
