import { Field, ObjectType } from '@nestjs/graphql'

import { Discussion } from './Discussion'
import { Project } from './Project'

@ObjectType()
export class Reply {
  @Field()
  id: string

  @Field(type => Discussion)
  discussion: Discussion

  @Field(type => Project)
  project: Project

  @Field()
  status: string
}
