import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

@Entity()
export class Counter {
  @PrimaryColumn()
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column({ default: 0 })
  value: number = 0

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
