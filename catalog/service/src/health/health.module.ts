import { Module }                 from '@nestjs/common'
/* eslint-disable max-classes-per-file */
import { TerminusModule }         from '@nestjs/terminus'

import { TerminusOptionsService } from './terminus-options.service.js'

@Module({
  imports: [TerminusModule],
  providers: [TerminusOptionsService],
  exports: [TerminusOptionsService],
})
export class HealthCoreModule {}

@Module({
  imports: [
    HealthCoreModule,
    TerminusModule.forRootAsync({
      imports: [HealthCoreModule],
      useExisting: TerminusOptionsService,
    }),
  ],
})
export class HealthModule {}
