import { DataLoaderInterceptor } from '@monstrs/nestjs-dataloader'
import { APP_INTERCEPTOR }       from '@nestjs/core'
import { GraphQLModule }         from '@nestjs/graphql'

import { Module }                from '@nestjs/common'
import { SomeModule }            from '@private-gateway/some'

const playground = process.env.NODE_ENV !== 'production' || Boolean(process.env.PLAYGROUND)

@Module({
  imports: [
    GraphQLModule.forRoot({
      introspection: playground,
      playground,
      installSubscriptionHandlers: false,
      autoSchemaFile: 'schema.gql',
      path: '//',
      cors: false,
    }),
    SomeModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class ApplicationModule {}
