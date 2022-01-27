import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

import { Credentials }      from './Credentials'
import { Email }            from './Email'
import { Profile }          from './Profile'

@Entity()
export class User {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  version: number

  @Column((type) => Email)
  email: Email

  @Column((type) => Credentials)
  credentials: Credentials

  @Column((type) => Profile)
  profile: Profile

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
