import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class CategoryGroupCreated extends Event {
  static readonly NAME = 'catalog/category-group-created'

  $name = CategoryGroupCreated.NAME

  $version = 0

  constructor(readonly categoryGroupId: Uuid, readonly name: string) {
    super()
  }
}
