import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ChangeAccountTypeErrors {
  @Field({ nullable: true })
  type?: string
}
