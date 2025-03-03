import { NestFactory }   from '@nestjs/core'

import { serverOptions } from '@protos/catalog'

import { ServiceModule } from './module.js'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(ServiceModule)

  app.connectMicroservice(serverOptions)

  await app.startAllMicroservices()
  await app.listen(3000)

  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
    import.meta.webpackHot.dispose(() => {
      app.close()
    })
  }
}

bootstrap()
