import { Column } from 'typeorm'

import {
  Account as AccountEntity,
  AccountStat,
  AccountType,
  getStateKey,
} from '@collaboration/domain'

export class Account extends AccountEntity {
  @Column('enum', {
    enum: AccountType,
    default: AccountType.free,
  })
  type: AccountType

  @Column('jsonb', {
    default: '{}',
  })
  stat: AccountStat = {}

  get replyLimited() {
    if (this.type === AccountType.pro) {
      return false
    }

    return (this.stat[getStateKey()] || 0) >= 25
  }
}
