import { Field }     from 'type-graphql'
import { ID }        from 'type-graphql'
import { InputType } from 'type-graphql'

@InputType()
export class UpdateSpecialistInput {
  @Field()
  formOfWork: string

  @Field({ nullable: true })
  numberOfEmployees: string

  @Field({ nullable: true })
  companyName: string

  @Field({ nullable: true })
  description: string

  @Field((type) => [ID])
  mainSpecialisation: string[]

  @Field((type) => [ID])
  additionalSpecialisation: string[]
}
