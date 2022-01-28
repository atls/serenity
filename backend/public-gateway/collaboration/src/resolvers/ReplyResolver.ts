import { Loader }          from '@atls/nestjs-dataloader'
import { Injectable }      from '@nestjs/common'
import { ResolveProperty } from '@nestjs/graphql'
import { Resolver }        from '@nestjs/graphql'
import { Root }            from '@nestjs/graphql'

import DataLoader          from 'dataloader'

import { collaboration }   from '@protos/interfaces'

import { ProjectLoader }   from '../dataloaders'
import { Reply }           from '../types'

@Injectable()
@Resolver((of) => Reply)
export class ReplyResolver {
  @ResolveProperty()
  project(
    @Root() { projectId }: collaboration.Reply,
    @Loader(ProjectLoader.name)
    projectLoader: DataLoader<any, any>
  ) {
    return projectLoader.load(projectId)
  }
}
