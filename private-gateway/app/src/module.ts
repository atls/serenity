import { DataLoaderInterceptor } from '@atls/nestjs-dataloader'
import { Module }                from '@nestjs/common'
import { APP_INTERCEPTOR }       from '@nestjs/core'
import { GraphQLModule }         from '@nestjs/graphql'

import { CatalogModule }         from '@private-gateway/catalog'

const playground = process.env.NODE_ENV !== 'production' || Boolean(process.env.PLAYGROUND)

@Module({
  imports: [
    GraphQLModule.forRoot({
      introspection: playground,
      installSubscriptionHandlers: false,
      autoSchemaFile: 'schema.gql',
      path: '//',
      cors: false,
    }),
    CatalogModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class ApplicationModule {}
