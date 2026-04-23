import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Phone {
  @Field({ nullable: true })
  number: string
}
