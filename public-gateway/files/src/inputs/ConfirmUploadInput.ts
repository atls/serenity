import { Field }     from '@nestjs/graphql'
import { ID }        from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ConfirmUploadInput {
  @Field((type) => ID)
  id: string
}
