import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { PageInfo }   from '@public-gateway/types'

import { Specialist } from './Specialist.js'

@ObjectType()
export class SpecialistsList {
  @Field((type) => [Specialist])
  rows: Specialist[]

  @Field((type) => PageInfo)
  pageInfo: PageInfo
}
