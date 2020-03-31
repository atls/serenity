import { Module }      from '@nestjs/common'

import { SomeQueries } from './resolvers'

@Module({
  providers: [SomeQueries],
})
export class SomeModule {}
