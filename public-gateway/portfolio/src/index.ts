import { Module }             from '@nestjs/common'

import { ImageLoader }        from './dataloaders/index.js'
import { PortfolioMutations } from './resolvers/index.js'
import { PortfolioResolver }  from './resolvers/index.js'

export * from './types/index.js'

const loaderProviders = [ImageLoader]

const loaderAliases = loaderProviders.map((loader) => ({
  provide: loader.name,
  useExisting: loader,
}))

@Module({
  providers: [PortfolioMutations, PortfolioResolver, ...loaderProviders, ...loaderAliases],
})
export class PortfolioModule {}
