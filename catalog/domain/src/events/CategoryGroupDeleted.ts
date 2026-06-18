export class CategoryGroupDeleted {
  static readonly NAME = 'catalog/category-group-deleted'

  $name = CategoryGroupDeleted.NAME

  $version = 0

  constructor(readonly categoryGroupId: string) {}
}
