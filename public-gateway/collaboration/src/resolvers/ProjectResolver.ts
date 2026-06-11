import { Injectable }     from '@nestjs/common'
import DataLoader         from 'dataloader'

import { Loader }         from '@atls/nestjs-dataloader'
import { ResolveField }   from '@nestjs/graphql'
import { Resolver }       from '@nestjs/graphql'
import { Root }           from '@nestjs/graphql'
import { Category }       from '@public-gateway/catalog'
import { File }           from '@public-gateway/files'
import { collaboration }  from '@protos/interfaces'

import { CategoryLoader } from '../dataloaders/index.js'
import { CounterLoader }  from '../dataloaders/index.js'
import { FilesLoader }    from '../dataloaders/index.js'
import { ReplyLoader }    from '../dataloaders/index.js'
import { Project }        from '../types/index.js'

@Injectable()
@Resolver((of) => Project)
export class ProjectResolver {
  @ResolveField()
  category(
    @Root() { categoryId }: collaboration.Project,
    @Loader(CategoryLoader.name)
    categoryLoader: DataLoader<any, Category>
  ) {
    if (!categoryId) {
      return null
    }

    return categoryLoader.load(categoryId)
  }

  @ResolveField()
  owner(@Root() { customerId }: collaboration.Project) {
    return { customerId }
  }

  @ResolveField()
  photos(
    @Root() { photos }: collaboration.Project,
    @Loader(FilesLoader.name)
    filesLoader: DataLoader<any, File>
  ) {
    if (!(photos && photos.length > 0)) {
      return []
    }

    return filesLoader.loadMany(photos)
  }

  @ResolveField()
  replies(
    @Root() { id }: collaboration.Reply,
    @Loader(ReplyLoader.name)
    replyLoader: DataLoader<any, File>
  ) {
    return replyLoader.load(id)
  }

  @ResolveField()
  async views(
    @Root() { id }: any,
    @Loader(CounterLoader.name)
    counterLoader: DataLoader<any, any>
  ) {
    const counter = await counterLoader.load(id)

    return counter ? counter.value : 0
  }
}
