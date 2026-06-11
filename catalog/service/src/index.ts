import { NestFactory }   from '@nestjs/core'
import { serverOptions } from '@protos/catalog'

import { ServiceModule } from './module.js'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(ServiceModule)
  const port = Number(process.env.PORT || 3000)

  app.connectMicroservice(serverOptions)

  await app.startAllMicroservicesAsync()
  await app.listen(port)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
