import { Column }                   from 'typeorm'

import { Account as AccountEntity } from '@collaboration/domain'
import { AccountStat }              from '@collaboration/domain'
import { AccountType }              from '@collaboration/domain'
import { getStateKey }              from '@collaboration/domain'

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
