import { AccountType } from './AccountType'

export const getStateKey = () => {
  const date = new Date()

  return `${date.getUTCMonth()}.${date.getUTCFullYear()}`
}

export interface AccountStat {
  [key: string]: number
}

export class Account {
  type: AccountType = AccountType.free

  stat: AccountStat = {}

  changeType(type: AccountType) {
    this.type = type
  }
}
