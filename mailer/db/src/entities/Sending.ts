import { Column }                 from 'typeorm'
import { CreateDateColumn }       from 'typeorm'
import { Entity }                 from 'typeorm'
import { PrimaryGeneratedColumn } from 'typeorm'
import { UpdateDateColumn }       from 'typeorm'

@Entity()
export class Sending {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  template: string

  @Column('jsonb')
  payload: any

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
