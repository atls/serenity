import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

import { Discussion } from './Discussion.js'
import { Project }    from './Project.js'

@ObjectType()
export class Reply {
  @Field()
  id: string

  @Field((type) => Discussion)
  discussion: Discussion

  @Field((type) => Project)
  project: Project

  @Field()
  status: string
}
