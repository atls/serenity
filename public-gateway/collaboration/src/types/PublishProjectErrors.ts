import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class PublishProjectErrors {
  @Field({ nullable: true })
  projectId?: string
}
