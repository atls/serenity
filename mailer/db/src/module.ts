import { Global }        from '@nestjs/common'
import { Module }        from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { Sending }       from './entities/index.js'
import config            from './config.js'

const feature = TypeOrmModule.forFeature([Sending])

@Global()
@Module({
  imports: [feature.module, TypeOrmModule.forRoot(config)],
  providers: feature.providers,
  exports: feature.exports,
})
export class DbModule {}
