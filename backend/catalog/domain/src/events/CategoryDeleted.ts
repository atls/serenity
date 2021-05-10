import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class CategoryDeleted extends Event {
  static readonly NAME = 'catalog/category-deleted'

  $name = CategoryDeleted.NAME

  $version = 0

  constructor(readonly categoryId: Uuid) {
    super()
  }
}
