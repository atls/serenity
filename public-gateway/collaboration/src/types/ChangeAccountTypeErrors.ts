import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChangeAccountTypeErrors {
  @Field({ nullable: true })
  type?: string
}
