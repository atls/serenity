export class CategoryGroupCreated {
  static readonly NAME = 'catalog/category-group-created'

  $name = CategoryGroupCreated.NAME

  $version = 0

  constructor(
    readonly categoryGroupId: string,
    readonly name: string
  ) {}
}
