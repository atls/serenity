import { Field, InputType } from 'type-graphql'

@InputType()
export class Order {
  @Field()
  by: string

  @Field()
  direction: string
}
