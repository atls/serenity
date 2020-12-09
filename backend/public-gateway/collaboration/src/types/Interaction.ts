import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Interaction {
  @Field()
  formOfWork: string

  @Field({ nullable: true })
  numberOfEmployees: string

  @Field({ nullable: true })
  name: string
}
