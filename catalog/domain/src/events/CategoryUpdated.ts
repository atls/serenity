import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class CategoryUpdated extends Event {
  static readonly NAME = 'catalog/category-updated'

  $name = CategoryUpdated.NAME

  $version = 0

  constructor(readonly categoryId: Uuid, readonly name: string) {
    super()
  }
}
