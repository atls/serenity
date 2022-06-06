import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ChangeAccountTypeErrors {
  @Field({ nullable: true })
  type?: string
}
