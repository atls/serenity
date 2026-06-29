import { DataLoaderInterceptor } from '@atls/nestjs-dataloader'
import { OathkeeperModule }      from '@atls/nestjs-oathkeeper'
import { ApolloDriver }          from '@nestjs/apollo'
import { ApolloDriverConfig }    from '@nestjs/apollo'
import { Module }                from '@nestjs/common'
import { APP_INTERCEPTOR }       from '@nestjs/core'
import { GraphQLModule }         from '@nestjs/graphql'
import { join }                  from 'path'

import { CatalogModule }         from '@public-gateway/catalog'
import { CollaborationModule }   from '@public-gateway/collaboration'
import { FilesModule }           from '@public-gateway/files'
import { IdentityModule }        from '@public-gateway/identity'
import { PortfolioModule }       from '@public-gateway/portfolio'
import { SearchModule }          from '@public-gateway/search'

import { ActivityMiddleware }    from './middleware/index.js'

const oathkeeperApiUrl =
  process.env.OATHKEEPER_API_URL ||
  process.env.OATHKEEPER_DECISIONS_URL?.replace(/\/decisions\/?$/, '') ||
  'http://serenity-oathkeeper-api:4456'

// eslint-disable-next-line
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
    OathkeeperModule.register({
      urls: {
        api: oathkeeperApiUrl,
      },
      decision: {
        forwardedHost: 'serenity.aunited.dev',
      },
      middleware: {
        mode: 'enrich',
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      playground: true,
      autoSchemaFile: join(__dirname, './schema.gql'),
      path: '//',
      cors: true,
      context: ({ req }) => ({
        user: req.get('x-user'),
      }),
    }),
    CollaborationModule,
    PortfolioModule,
    IdentityModule,
    CatalogModule,
    SearchModule,
    FilesModule,
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
