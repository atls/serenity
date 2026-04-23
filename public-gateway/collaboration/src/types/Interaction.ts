import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Interaction {
  @Field()
  formOfWork: string

  @Field({ nullable: true })
  numberOfEmployees: string

  @Field({ nullable: true })
  name: string
}
