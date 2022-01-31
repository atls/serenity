import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class SearchProjectsFilter {
  @Field((type) => ID, { nullable: true })
  categoryId: string

  @Field({ nullable: true })
  status: string
}
