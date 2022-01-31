import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdateProjectErrors {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  photos?: string

  @Field({ nullable: true })
  address?: string

  @Field({ nullable: true })
  beginningOfWork?: string

  @Field({ nullable: true })
  budget?: string

  @Field({ nullable: true })
  legalEntitiesOnly?: string
}
