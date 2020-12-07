import { Column }                                 from 'typeorm'

import { Specialisation as SpecialisationEntity } from '@collaboration/domain'

export class Specialisation extends SpecialisationEntity {
  @Column('simple-array', {
    nullable: true,
  })
  main: string[] = []

  @Column('simple-array', {
    nullable: true,
  })
  additional: string[] = []
}
