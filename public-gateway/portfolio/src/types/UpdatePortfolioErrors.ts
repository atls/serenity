import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdatePortfolioErrors {
  @Field({ nullable: true })
  name?: string
}
