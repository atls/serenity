import { Module }           from '@nestjs/common'

import { MailerController } from './controllers/index.js'
import { MailerService }    from './services/index.js'

@Module({
  providers: [MailerService],
  controllers: [MailerController],
})
export class ApiModule {}
