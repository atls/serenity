import { TypeOrmModule }  from '@nestjs/typeorm'

import { Global, Module } from '@nestjs/common'

import config             from './config'
import { Sending }        from './entities'

const feature = TypeOrmModule.forFeature([Sending])

@Global()
@Module({
  imports: [feature.module, TypeOrmModule.forRoot(config)],
  providers: feature.providers,
  exports: feature.exports,
})
export class DbModule {}
