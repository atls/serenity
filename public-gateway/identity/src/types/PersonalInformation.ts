import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class PersonalInformation {
  @Field()
  firstName: string

  @Field()
  lastName: string
}
