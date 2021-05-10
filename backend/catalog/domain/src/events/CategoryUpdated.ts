import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class CategoryUpdated extends Event {
  static readonly NAME = 'catalog/category-updated'

  $name = CategoryUpdated.NAME

  $version = 0

  constructor(readonly categoryId: Uuid, readonly name: string) {
    super()
  }
}
