import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

@Entity()
export class Portfolio {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  userId: string

  @Column()
  name: string

  @Column('simple-array', {
    nullable: true,
  })
  images: string[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
