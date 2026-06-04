import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Activity {
  @Field(() => Date, { nullable: true })
  get last(): Date | undefined {
    return this.lastActivity
  }

  lastActivity?: Date

  set last(value) {
    if (value) {
      this.lastActivity = new Date(value)
    }
  }
}
