import { BusHealthIndicator }     from '@monstrs/nestjs-bus-health'
import { Injectable }             from '@nestjs/common'
import { TerminusModuleOptions }  from '@nestjs/terminus'
import { TerminusOptionsFactory } from '@nestjs/terminus'
import { TypeOrmHealthIndicator } from '@nestjs/terminus'

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(
    private readonly db: TypeOrmHealthIndicator,
    private readonly bus: BusHealthIndicator
  ) {}

  public createTerminusOptions(): TerminusModuleOptions {
    return {
      endpoints: [
        {
          url: '/health/alive',
          healthIndicators: [
            async () => this.db.pingCheck('database', { timeout: 300 }),
            async () => this.bus.pingCheck('bus'),
          ],
        },
        {
          url: '/health/ready',
          healthIndicators: [
            async () => this.db.pingCheck('database', { timeout: 300 }),
            async () => this.bus.pingCheck('bus'),
          ],
        },
      ],
    }
  }
}
