import { Field }      from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Profile }    from '@public-gateway/identity'

@ObjectType()
export class Review {
  @Field()
  id: string

  @Field()
  rating: number

  @Field()
  comment: string

  @Field((type) => Profile)
  customer: Profile
}
