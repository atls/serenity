import { Module } from '@nestjs/common'
import { BusSharedModule } from './shared/bus-shared.module'
import { ApiModule } from '@mailer/api'
import { DbModule } from '@mailer/db'
import { RendererModule } from '@mailer/renderer'
import { TransportModule } from '@mailer/transport'
import { EmailVerificationHandler } from './handlers'
import { ResetPasswordHandler } from './handlers'

@Module({
  imports: [
    BusSharedModule,
    DbModule,
    ApiModule,
    RendererModule,
    TransportModule,
  ],
  providers: [EmailVerificationHandler, ResetPasswordHandler],
})
export class AppModule {}
