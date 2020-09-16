import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Phone {
  @Field({ nullable: true })
  number: string
}
