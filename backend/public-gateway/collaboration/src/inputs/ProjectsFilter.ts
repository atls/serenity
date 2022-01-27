import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class ProjectsFilter {
  @Field((type) => [ID], { nullable: true })
  id: string[]
}
