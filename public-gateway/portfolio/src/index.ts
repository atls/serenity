import { Module }             from '@nestjs/common'

import { ImageLoader }        from './dataloaders'
import { PortfolioMutations } from './resolvers'
import { PortfolioResolver }  from './resolvers'

export * from './types'

@Module({
  providers: [ImageLoader, PortfolioMutations, PortfolioResolver],
})
export class PortfolioModule {}
