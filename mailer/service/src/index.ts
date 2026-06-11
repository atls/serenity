import fs              from 'fs'
import path            from 'path'

import { NestFactory } from '@nestjs/core'
import { Transport }   from '@nestjs/microservices'

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

  const app = await NestFactory.createMicroservice(AppModule, serverOptions as any)

  await app.listenAsync()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
