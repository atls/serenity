import { NestFactory }        from '@nestjs/core'
import { oathkeeperAuth }     from '@monstrs/oathkeeper-auth'

import { ApplicationModule }  from './module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(ApplicationModule)

  if (process.env.NODE_ENV !== 'production') {
    app.use(
      oathkeeperAuth(
        process.env.OATHKEEPER_DECISIONS_URL || 'http://serenity-oathkeeper-api:4456/decisions',
        { host: 'serenity.aunited.dev' }
      )
    )
  }

  await app.listen(process.env.PORT || 3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
