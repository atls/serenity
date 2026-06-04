import { Module }             from '@nestjs/common'

import { ImageLoader }        from './dataloaders'
import { PortfolioMutations } from './resolvers'
import { PortfolioResolver }  from './resolvers'

export * from './types'

const loaderProviders = [ImageLoader]

const loaderAliases = loaderProviders.map((loader) => ({
  provide: loader.name,
  useExisting: loader,
}))

@Module({
  providers: [PortfolioMutations, PortfolioResolver, ...loaderProviders, ...loaderAliases],
})
export class PortfolioModule {}
