import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Address {
  @Field({ nullable: true })
  formatted: string
}
