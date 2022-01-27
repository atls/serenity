/* eslint-disable no-underscore-dangle */
import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

@Entity()
export class Review {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  projectId: string

  @Column()
  replyId: string

  @Column()
  customerId: string

  @Column()
  specialistId: string

  @Column()
  rating: number

  @Column()
  comment: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
