import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ProjectAddress {
  @Field({ nullable: true })
  formatted: string
}
