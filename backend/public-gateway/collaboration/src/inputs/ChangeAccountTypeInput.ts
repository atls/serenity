import { Field, InputType } from 'type-graphql'

@InputType()
export class ChangeAccountTypeInput {
  @Field()
  type: string
}
