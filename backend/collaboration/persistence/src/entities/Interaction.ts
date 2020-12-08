import { Column }     from 'typeorm'

import { FormOfWork } from '@collaboration/domain'

export class Interaction {
  @Column('enum', {
    enum: FormOfWork,
    default: FormOfWork.person,
  })
  formOfWork: FormOfWork

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  numberOfEmployees?: string
}
