import { NestFactory }   from '@nestjs/core'

import { serverOptions } from '@protos/mailer'

import { AppModule }     from './module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(AppModule, serverOptions)

  await app.listenAsync()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
