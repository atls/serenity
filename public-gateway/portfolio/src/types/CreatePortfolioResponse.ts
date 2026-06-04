import { Field }                 from '@nestjs/graphql'
import { ObjectType }            from '@nestjs/graphql'

import { CreatePortfolioErrors } from './CreatePortfolioErrors'
import { Portfolio }             from './Portfolio'

@ObjectType()
export class CreatePortfolioResponse {
  @Field((type) => Portfolio, { nullable: true })
  result?: Portfolio

  @Field((type) => CreatePortfolioErrors, { nullable: true })
  errors?: CreatePortfolioErrors
}
