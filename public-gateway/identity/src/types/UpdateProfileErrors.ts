import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdateProfileErrors {
  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string

  @Field({ nullable: true })
  phone?: string

  @Field({ nullable: true })
  photoId?: string

  @Field({ nullable: true })
  address?: string

  @Field({ nullable: true })
  website?: string
}
