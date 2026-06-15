import { Module }                from '@nestjs/common'

import { DataLoaderInterceptor } from '@atls/nestjs-dataloader'
import { ApolloDriver }          from '@nestjs/apollo'
import { ApolloDriverConfig }    from '@nestjs/apollo'
import { APP_INTERCEPTOR }       from '@nestjs/core'
import { GraphQLModule }         from '@nestjs/graphql'
import { CatalogModule }         from '@private-gateway/catalog'

const playground = process.env.NODE_ENV !== 'production' || Boolean(process.env.PLAYGROUND)

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: playground,
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
