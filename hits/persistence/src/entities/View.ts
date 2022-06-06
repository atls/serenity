import { Column }                 from 'typeorm'
import { CreateDateColumn }       from 'typeorm'
import { Entity }                 from 'typeorm'
import { Index }                  from 'typeorm'
import { PrimaryGeneratedColumn } from 'typeorm'

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
