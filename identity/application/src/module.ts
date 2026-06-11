import { Module }              from '@nestjs/common'

import { KratosAdapterModule } from '@identity/kratos-adapter'

import * as services           from './services/index.js'

@Module({
  imports: [KratosAdapterModule.register()],
  providers: [...Object.values(services)],
  exports: [...Object.values(services)],
})
export class ApplicationModule {}
