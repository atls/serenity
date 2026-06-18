export class CategoryCreated {
  static readonly NAME = 'catalog/category-created'

  $name = CategoryCreated.NAME

  $version = 0

  constructor(
    readonly categoryId: string,
    readonly groupId: string,
    readonly name: string
  ) {}
}
