export class CategoryUpdated {
  static readonly NAME = 'catalog/category-updated'

  $name = CategoryUpdated.NAME

  $version = 0

  constructor(
    readonly categoryId: string,
    readonly name: string
  ) {}
}
