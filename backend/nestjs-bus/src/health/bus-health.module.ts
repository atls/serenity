import { Module } from '@nestjs/common'

import { BusHealthIndicator } from './bus-health.indicator.js'

@Module({
  providers: [BusHealthIndicator],
  exports: [BusHealthIndicator],
})
export class BusHealthModule {}
