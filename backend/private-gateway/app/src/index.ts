import { NestFactory }       from '@nestjs/core'

import { ApplicationModule } from './module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(ApplicationModule)

  await app.listen(process.env.PORT || 3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
