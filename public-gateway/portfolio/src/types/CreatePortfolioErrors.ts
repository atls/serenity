import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreatePortfolioErrors {
  @Field({ nullable: true })
  name?: string
}
