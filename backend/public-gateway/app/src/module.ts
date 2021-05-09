import { Module }                from '@nestjs/common'
import { APP_INTERCEPTOR }       from '@nestjs/core'
import { GraphQLModule }         from '@nestjs/graphql'

import { DataLoaderInterceptor } from '@monstrs/nestjs-dataloader'
import { CatalogModule }         from '@public-gateway/catalog'
import { CollaborationModule }   from '@public-gateway/collaboration'
import { FilesModule }           from '@public-gateway/files'
import { IdentityModule }        from '@public-gateway/identity'

import { ActivityMiddleware }    from './middleware'

const playground =
  process.env.NODE_ENV !== 'production' || Boolean(process.env.PLAYGROUND)
    ? {
        settings: {
          'request.credentials': 'include',
        },
      }
    : false

@Module({
  imports: [
    GraphQLModule.forRoot({
      introspection: Boolean(playground),
      playground,
      installSubscriptionHandlers: false,
      autoSchemaFile: 'schema.gql',
      path: '//',
      cors: false,
      context: ({ req }) => ({
        user: req.get('x-user'),
      }),
    }),
    IdentityModule,
    CatalogModule,
    FilesModule,
    CollaborationModule,
  ],
  providers: [
    ActivityMiddleware,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class ApplicationModule {}
