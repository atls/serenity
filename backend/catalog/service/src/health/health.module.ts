/* eslint-disable max-classes-per-file */
import { BusHealthModule }        from '@monstrs/nestjs-bus-health'
import { Module }                 from '@nestjs/common'
import { TerminusModule }         from '@nestjs/terminus'

import { TerminusOptionsService } from './terminus-options.service'

@Module({
  imports: [TerminusModule, BusHealthModule],
  providers: [TerminusOptionsService],
  exports: [TerminusOptionsService],
})
export class HealthCoreModule {}

@Module({
  imports: [
    HealthCoreModule,
    BusHealthModule,
    TerminusModule.forRootAsync({
      imports: [HealthCoreModule],
      useExisting: TerminusOptionsService,
    }),
  ],
})
export class HealthModule {}
