/* eslint-disable no-underscore-dangle */
import { Column }           from 'typeorm'
import { CreateDateColumn } from 'typeorm'
import { Entity }           from 'typeorm'
import { JoinColumn }       from 'typeorm'
import { ManyToOne }        from 'typeorm'
import { PrimaryColumn }    from 'typeorm'
import { UpdateDateColumn } from 'typeorm'

import { CategoryGroup }    from './CategoryGroup'

@Entity()
export class Category {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  name: string

  @ManyToOne((type) => CategoryGroup)
  @JoinColumn()
  group: CategoryGroup | string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  private _groupId: string

  set groupId(groupId) {
    if (!this.group) {
      this.group = groupId
    }

    this._groupId = groupId
  }

  get groupId() {
    return this._groupId
  }
}
