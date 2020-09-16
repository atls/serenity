import { AggregateRoot }                                     from '@node-ts/ddd'
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { AggregateRootProperties }                           from '@node-ts/ddd-types'

import { CategoryCreated, CategoryDeleted, CategoryUpdated } from '../events'

export interface CategoryProperties extends AggregateRootProperties {
  groupId: string
  name: string
}

export class Category extends AggregateRoot implements CategoryProperties {
  groupId: string

  name: string

  static async create(id: string, groupId: string, name: string): Promise<Category> {
    const category = new Category(id)

    category.when(new CategoryCreated(id, groupId, name))

    return category
  }

  update(name: string) {
    this.when(new CategoryUpdated(this.id, name))
  }

  purge() {
    this.delete(new CategoryDeleted(this.id))
  }

  protected whenCategoryCreated(event: CategoryCreated): void {
    this.groupId = event.groupId
    this.name = event.name
  }

  protected whenCategoryUpdated(event: CategoryUpdated): void {
    this.name = event.name
  }

  protected whenCategoryDeleted(event: CategoryDeleted): void {}
}
