import { NestFactory } from '@nestjs/core'
import { Transport }   from '@nestjs/microservices'
import fs              from 'fs'
import path            from 'path'

import { AppModule }   from './module.js'

declare const module: any

const resolveWorkspacePath = (...segments: Array<string>) => {
  const localPath = path.resolve(process.cwd(), ...segments)

  if (fs.existsSync(localPath)) {
    return localPath
  }

  return path.resolve(process.cwd(), '..', '..', ...segments)
}

const bootstrap = async () => {
  const serverOptions: any = {
    transport: Transport.GRPC,
    options: {
      package: 'mailer',
      url: process.env.MAILER_SERVICE_URL || '0.0.0.0:50051',
      protoPath: resolveWorkspacePath('protos', 'mailer', 'mailer.proto'),
      loader: {
        arrays: true,
        includeDirs: [resolveWorkspacePath('protos', 'common')],
      },
    },
  }
  const busUrl =
    process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30&frameMax=8192'

  const app = await NestFactory.create(AppModule)

  app.connectMicroservice(serverOptions)
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
