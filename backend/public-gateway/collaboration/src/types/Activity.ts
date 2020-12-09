import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Activity {
  @Field({ nullable: true })
  get last(): Date {
    return this.lastActivity
  }

  lastActivity?: Date

  set last(value) {
    if (value) {
      this.lastActivity = new Date(value)
    }
  }
}
