import { Loader }          from '@atls/nestjs-dataloader'
import { Injectable }      from '@nestjs/common'
import { ResolveField }    from '@nestjs/graphql'
import { Resolver }        from '@nestjs/graphql'
import { Root }            from '@nestjs/graphql'

import DataLoader          from 'dataloader'

import { PortfolioLoader } from '../dataloaders'
import { ReviewLoader }    from '../dataloaders'
import { UserLoader }      from '../dataloaders'
import { Specialist }      from '../types'

@Injectable()
@Resolver((of) => Specialist)
export class SpecialistResolver {
  @ResolveField()
  async profile(
    @Root() { id }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(id)

    return user.profile
  }

  @ResolveField()
  portfolio(
    @Root() { id }: any,
    @Loader(PortfolioLoader.name)
    portfolioLoader: DataLoader<any, any>
  ) {
    return portfolioLoader.load(id)
  }

  @ResolveField()
  reviews(
    @Root() { id }: any,
    @Loader(ReviewLoader.name)
    reviewLoader: DataLoader<any, any>
  ) {
    return reviewLoader.load(id)
  }
}
