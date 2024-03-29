import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CompleteProjectErrors {
  @Field({ nullable: true })
  projectId?: string

  @Field({ nullable: true })
  rating?: string

  @Field({ nullable: true })
  comment?: string
}
