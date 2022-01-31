import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdatePortfolioErrors {
  @Field({ nullable: true })
  name?: string
}
