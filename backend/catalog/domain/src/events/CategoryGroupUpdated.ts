import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class CategoryGroupUpdated extends Event {
  static readonly NAME = 'catalog/category-group-updated'

  $name = CategoryGroupUpdated.NAME

  $version = 0

  constructor(readonly categoryGroupId: Uuid, readonly name: string) {
    super()
  }
}
