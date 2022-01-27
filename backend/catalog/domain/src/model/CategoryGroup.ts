import { AggregateRoot }           from '@node-ts/ddd'
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { AggregateRootProperties } from '@node-ts/ddd-types'

import { CategoryGroupCreated }    from '../events'
import { CategoryGroupDeleted }    from '../events'
import { CategoryGroupUpdated }    from '../events'

export interface CategoryGroupProperties extends AggregateRootProperties {
  name: string
}

export class CategoryGroup extends AggregateRoot implements CategoryGroupProperties {
  name: string

  static async create(id: string, name: string): Promise<CategoryGroup> {
    const categoryGroup = new CategoryGroup(id)

    categoryGroup.when(new CategoryGroupCreated(id, name))

    return categoryGroup
  }

  update(name: string) {
    this.when(new CategoryGroupUpdated(this.id, name))
  }

  purge() {
    this.delete(new CategoryGroupDeleted(this.id))
  }

  protected whenCategoryGroupCreated(event: CategoryGroupCreated): void {
    this.name = event.name
  }

  protected whenCategoryGroupUpdated(event: CategoryGroupUpdated): void {
    this.name = event.name
  }

  protected whenCategoryGroupDeleted(event: CategoryGroupDeleted): void {}
}
