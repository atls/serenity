import { Field }           from '@nestjs/graphql'
import { ObjectType }      from '@nestjs/graphql'
import { ProjectsList }    from '@public-gateway/collaboration'
import { SpecialistsList } from '@public-gateway/collaboration'

@ObjectType()
export class Search {
  @Field((type) => ProjectsList)
  projects: ProjectsList

  @Field((type) => SpecialistsList)
  specialists: SpecialistsList
}
