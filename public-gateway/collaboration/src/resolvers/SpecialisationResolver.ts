import { Injectable }       from '@nestjs/common'
import DataLoader           from 'dataloader'

import { Loader }           from '@atls/nestjs-dataloader'
import { ResolveField }     from '@nestjs/graphql'
import { Resolver }         from '@nestjs/graphql'
import { Root }             from '@nestjs/graphql'
import { Category }         from '@public-gateway/catalog'
import { collaboration }    from '@protos/interfaces'

import { CategoriesLoader } from '../dataloaders/index.js'
import { Specialisation }   from '../types/index.js'

@Injectable()
@Resolver((of) => Specialisation)
export class SpecialisationResolver {
  @ResolveField()
  main(
    @Root() { main }: collaboration.Specialisation,
    @Loader(CategoriesLoader.name)
    categoriesLoader: DataLoader<any, Category>
  ) {
    if (!(main && main.length > 0)) {
      return []
    }

    return categoriesLoader.loadMany(main)
  }

  @ResolveField()
  additional(
    @Root() { additional }: collaboration.Specialisation,
    @Loader(CategoriesLoader.name)
    categoriesLoader: DataLoader<any, Category>
  ) {
    if (!(additional && additional.length > 0)) {
      return []
    }

    return categoriesLoader.loadMany(additional)
  }
}
