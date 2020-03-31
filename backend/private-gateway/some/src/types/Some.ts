import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Some {
  @Field()
  id: string

  @Field()
  name: string
}
