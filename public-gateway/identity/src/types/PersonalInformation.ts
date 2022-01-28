import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class PersonalInformation {
  @Field()
  firstName: string

  @Field()
  lastName: string
}
