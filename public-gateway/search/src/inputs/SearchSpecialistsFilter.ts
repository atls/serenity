import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class SearchSpecialistsFilter {
  @Field((type) => ID, { nullable: true })
  specialisationId?: string
}
