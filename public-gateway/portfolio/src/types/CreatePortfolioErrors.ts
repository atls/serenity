import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreatePortfolioErrors {
  @Field({ nullable: true })
  name?: string
}
