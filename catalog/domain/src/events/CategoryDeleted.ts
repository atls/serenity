export class CategoryDeleted {
  static readonly NAME = 'catalog/category-deleted'

  $name = CategoryDeleted.NAME

  $version = 0

  constructor(readonly categoryId: string) {}
}
