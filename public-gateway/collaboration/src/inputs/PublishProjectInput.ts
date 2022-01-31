import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class PublishProjectInput {
  @Field((type) => ID)
  projectId: string
}
