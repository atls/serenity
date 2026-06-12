import { Module }                 from '@nestjs/common'

/* eslint-disable max-classes-per-file */
import { BusHealthModule }        from '@serenity/nestjs-bus'
import { TerminusModule }         from '@nestjs/terminus'

import { TerminusOptionsService } from './terminus-options.service.js'

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
