import { Injectable }             from '@nestjs/common'
import { TerminusModuleOptions }  from '@nestjs/terminus'
import { TerminusOptionsFactory } from '@nestjs/terminus'
import { TypeOrmHealthIndicator } from '@nestjs/terminus'

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(private readonly db: TypeOrmHealthIndicator) {}

  public createTerminusOptions(): TerminusModuleOptions {
    return {
      endpoints: [
        {
          url: '/health/alive',
          healthIndicators: [async () => this.db.pingCheck('database', { timeout: 300 })],
        },
        {
          url: '/health/ready',
          healthIndicators: [async () => this.db.pingCheck('database', { timeout: 300 })],
        },
      ],
    }
  }
}
