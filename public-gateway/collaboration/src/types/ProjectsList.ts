import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { PageInfo }   from '@public-gateway/types'

import { Project }    from './Project'

@ObjectType()
export class ProjectsList {
  @Field((type) => [Project])
  rows: Project[]

  @Field((type) => PageInfo)
  pageInfo: PageInfo
}
