import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class PublishProjectErrors {
  @Field({ nullable: true })
  projectId?: string
}
