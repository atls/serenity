import { BusModule }                from '@monstrs/nestjs-bus'
import { Module }                   from '@nestjs/common'

import { ApiModule }                from '@mailer/api'
import { DbModule }                 from '@mailer/db'
import { RendererModule }           from '@mailer/renderer'
import { TransportModule }          from '@mailer/transport'

import { EmailVerificationHandler } from './handlers'
import { ResetPasswordHandler }     from './handlers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'mailer',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    DbModule,
    ApiModule,
    RendererModule,
    TransportModule,
  ],
  providers: [EmailVerificationHandler, ResetPasswordHandler],
})
export class AppModule {}
