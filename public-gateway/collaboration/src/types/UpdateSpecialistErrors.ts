import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdateSpecialistErrors {
  @Field({ nullable: true })
  formOfWork?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  mainSpecialisation?: string

  @Field({ nullable: true })
  additionalSpecialisation?: string
}
