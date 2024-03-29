import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Activity {
  @Field({ nullable: true })
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
