import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class CategoryGroupDeleted extends Event {
  static readonly NAME = 'catalog/category-group-deleted'

  $name = CategoryGroupDeleted.NAME

  $version = 0

  constructor(readonly categoryGroupId: Uuid) {
    super()
  }
}
