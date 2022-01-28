import { Module }   from '@nestjs/common'

import { Renderer } from './Renderer'

const renderer = {
  provide: Renderer,
  useFactory: () => new Renderer(process.env.EMAIL_RENDERER_URL || 'http://email:3000/'),
}

@Module({
  providers: [renderer],
  exports: [renderer],
})
export class RendererModule {}
