export class CategoryGroupUpdated {
  static readonly NAME = 'catalog/category-group-updated'

  $name = CategoryGroupUpdated.NAME

  $version = 0

  constructor(
    readonly categoryGroupId: string,
    readonly name: string
  ) {}
}
