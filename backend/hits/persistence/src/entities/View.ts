/* eslint-disable no-underscore-dangle */
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@Index(['subject', 'resource'], { unique: true })
export class View {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  version: number = 0

  @Column()
  subject: string

  @Column()
  resource: string

  @CreateDateColumn()
  createdAt: Date
}
