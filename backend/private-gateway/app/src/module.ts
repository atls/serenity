import { DataLoaderInterceptor } from '@monstrs/nestjs-dataloader'
import { Module }                from '@nestjs/common'
import { APP_INTERCEPTOR }       from '@nestjs/core'
import { GraphQLModule }         from '@nestjs/graphql'

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
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class ApplicationModule {}
