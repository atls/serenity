import { NestFactory }   from '@nestjs/core'
import { Transport }     from '@nestjs/microservices'

import { serverOptions } from '@protos/search'

import { ServiceModule } from './module.js'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(ServiceModule)
  const port = Number(process.env.PORT || 3000)
  const busUrl =
    process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192'

  app.connectMicroservice(serverOptions)
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [busUrl],
      queue: process.env.SEARCH_EVENTS_QUEUE || 'search',
    },
  })

  await app.startAllMicroservicesAsync()
  await app.listen(port)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
