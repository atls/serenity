import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateProfileInput {
  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field({ nullable: true })
  phone: string

  @Field({ nullable: true })
  photoId: string

  @Field({ nullable: true })
  address: string

  @Field({ nullable: true })
  website: string
}
