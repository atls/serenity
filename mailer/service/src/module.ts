import { Module }                   from '@nestjs/common'

import { ApiModule }                from '@mailer/api'
import { DbModule }                 from '@mailer/db'
import { RendererModule }           from '@mailer/renderer'
import { TransportModule }          from '@mailer/transport'

import { EmailVerificationHandler } from './handlers/index.js'
import { ResetPasswordHandler }     from './handlers/index.js'

@Module({
  imports: [DbModule, ApiModule, RendererModule, TransportModule],
  controllers: [EmailVerificationHandler, ResetPasswordHandler],
})
export class AppModule {}
