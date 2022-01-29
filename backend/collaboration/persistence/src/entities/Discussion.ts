import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { OneToMany }        from 'typeorm'
import { OneToOne }         from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

import { Message }          from './Message'
import { Reply }            from './Reply'

@Entity()
export class Discussion {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  specialistId: string

  @Column()
  customerId: string

  @OneToOne((type) => Reply, (reply) => reply.discussion)
  reply: Reply

  @OneToMany((type) => Message, (message) => message.discussion)
  messages: Message[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
