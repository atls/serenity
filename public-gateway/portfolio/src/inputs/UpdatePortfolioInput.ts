import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UpdatePortfolioInput {
  @Field((type) => ID)
  id: string

  @Field()
  name: string

  @Field((type) => [ID])
  images: string[]
}
