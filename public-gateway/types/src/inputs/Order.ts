import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class Order {
  @Field()
  by: string

  @Field()
  direction: string
}
