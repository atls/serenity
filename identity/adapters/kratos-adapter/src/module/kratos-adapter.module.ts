import * as services     from '../services'

import { Module }        from '@nestjs/common'
import { DynamicModule } from '@nestjs/common'

@Module({})
export class KratosAdapterModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: KratosAdapterModule,
      providers: [...Object.values(services)],
      exports: [...Object.values(services)],
    }
  }
}
