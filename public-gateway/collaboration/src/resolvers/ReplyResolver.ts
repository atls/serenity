import { Injectable }    from '@nestjs/common'
import DataLoader        from 'dataloader'

import { Loader }        from '@atls/nestjs-dataloader'
import { ResolveField }  from '@nestjs/graphql'
import { Resolver }      from '@nestjs/graphql'
import { Root }          from '@nestjs/graphql'
import { collaboration } from '@protos/interfaces'

import { ProjectLoader } from '../dataloaders/index.js'
import { Reply }         from '../types/index.js'

@Injectable()
@Resolver((of) => Reply)
export class ReplyResolver {
  @ResolveField()
  project(
    @Root() { projectId }: collaboration.Reply,
    @Loader(ProjectLoader.name)
    projectLoader: DataLoader<any, any>
  ) {
    return projectLoader.load(projectId)
  }
}
