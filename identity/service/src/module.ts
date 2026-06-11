import { Module }                from '@nestjs/common'

import { ApplicationModule }     from '@identity/application'

import { UserQueriesController } from './controllers/index.js'

@Module({
  imports: [ApplicationModule],
  controllers: [UserQueriesController],
})
export class ServiceModule {}
