import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ProjectsFilter {
  @Field((type) => [ID], { nullable: true })
  id: string[]
}
