import { Column }               from 'typeorm'

import { Photo as PhotoEntity } from '@identity/domain'

export class Photo extends PhotoEntity {
  @Column({ nullable: true })
  id: string
}
