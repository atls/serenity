import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ChangeAccountTypeInput {
  @Field()
  type: string
}
