import { Field }      from '@nestjs/graphql'
import { ID }         from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { File }       from '@public-gateway/files'

@ObjectType()
export class Portfolio {
  @Field((type) => ID)
  id: string

  @Field()
  name: string

  @Field((type) => [File])
  images: File[]
}
