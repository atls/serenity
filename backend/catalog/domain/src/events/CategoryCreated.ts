import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class CategoryCreated extends Event {
  static readonly NAME = 'catalog/category-created'

  $name = CategoryCreated.NAME

  $version = 0

  constructor(readonly categoryId: Uuid, readonly groupId: string, readonly name: string) {
    super()
  }
}
