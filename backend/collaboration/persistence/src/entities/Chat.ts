/* eslint-disable no-underscore-dangle */
import { Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from 'typeorm'

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
