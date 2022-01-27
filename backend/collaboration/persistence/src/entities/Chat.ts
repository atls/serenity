/* eslint-disable no-underscore-dangle */
import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { Index }            from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

@Entity()
@Index(['customerId', 'specialistId'], { unique: true })
export class Chat {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  customerId: string

  @Column()
  specialistId: string

  @Column()
  discussionId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
