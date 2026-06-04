import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Category }   from '@public-gateway/catalog'

@ObjectType()
export class Specialisation {
  @Field((type) => [Category], { nullable: true })
  main: Category[]

  @Field((type) => [Category], { nullable: true })
  additional: Category[]
}
