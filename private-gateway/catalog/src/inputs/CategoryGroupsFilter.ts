import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CategoryGroupsFilter {
  @Field({ nullable: true })
  search?: string
}
