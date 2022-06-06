import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Phone {
  @Field({ nullable: true })
  number: string
}
