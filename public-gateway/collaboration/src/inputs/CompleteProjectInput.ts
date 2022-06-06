import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CompleteProjectInput {
  @Field((type) => ID)
  projectId: string

  @Field()
  rating: number

  @Field()
  comment: string
}
