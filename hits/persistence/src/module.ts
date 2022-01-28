import { LoggerModule }  from '@monstrs/nestjs-logger'
import { Global }        from '@nestjs/common'
import { Module }        from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import config            from './config'
import { Activity }      from './entities'
import { Counter }       from './entities'
import { View }          from './entities'

const feature = TypeOrmModule.forFeature([Counter, View, Activity])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [...feature.providers],
  // @ts-ignore
  exports: [...feature.exports],
})
export class PersistenceModule {}
