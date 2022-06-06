import { Module }           from '@nestjs/common'

import { MailerController } from './controllers'
import { MailerService }    from './services'

@Module({
  providers: [MailerService],
  controllers: [MailerController],
})
export class ApiModule {}
