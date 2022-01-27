import { Injectable }               from '@nestjs/common'

import { Category }                 from '@catalog/domain'
import { CategoryEntityRepository } from '@catalog/persistence'

import { CreateCategoryCommand }    from '../commands'
import { DeleteCategoryCommand }    from '../commands'
import { UpdateCategoryCommand }    from '../commands'

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryEntityRepository) {}

  async create(command: CreateCategoryCommand): Promise<any> {
    const category = await Category.create(command.id, command.groupId, command.name)

    await this.categoryRepository.save(category)

    return category
  }

  async update(command: UpdateCategoryCommand): Promise<any> {
    const category = await this.categoryRepository.getById(command.id)

    category.update(command.name)

    await this.categoryRepository.save(category)

    return category
  }

  async delete(command: DeleteCategoryCommand): Promise<any> {
    const category = await this.categoryRepository.getById(command.id)

    category.purge()

    await this.categoryRepository.save(category)

    return {
      id: command.id,
    }
  }
}
