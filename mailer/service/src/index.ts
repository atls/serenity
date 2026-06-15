import { NestFactory }   from '@nestjs/core'
import { Transport }     from '@nestjs/microservices'

import { serverOptions } from '@protos/mailer'

import { AppModule }     from './module.js'

declare const module: any

const bootstrap = async () => {
  const busUrl =
    process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192'

  const app = await NestFactory.create(AppModule)

  app.connectMicroservice(serverOptions as any)
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [busUrl],
      queue: process.env.MAILER_EVENTS_QUEUE || 'mailer',
    },
  })

  await app.startAllMicroservicesAsync()
  await app.init()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
