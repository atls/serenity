import { Module }    from '@nestjs/common'

import { Transport } from './Transport'

declare const __non_webpack_require__: any

const getAwsSdk = () => {
  const runtimeRequire =
    typeof __non_webpack_require__ !== 'undefined' ? __non_webpack_require__ : require

  return runtimeRequire('aws-sdk')
}

const getMailhogOptions = () => ({
  host: 'mailhog',
  port: 1025,
  secure: false,
  auth: {
    user: 'user',
    pass: 'pass',
  },
})

const getSesOptions = () => {
  const { SES } = getAwsSdk()

  return {
    SES: new SES({
      apiVersion: '2010-12-01',
      region: process.env.SES_REGION,
      accessKeyId: process.env.SES_KEY,
      secretAccessKey: process.env.SES_SECRET,
    }),
  }
}

const transport = {
  provide: Transport,
  useFactory: () =>
    new Transport(
      process.env.SENDER || 'no-reply@example.com',
      process.env.NODE_ENV === 'production' ? getSesOptions() : getMailhogOptions()
    ),
}

@Module({
  providers: [transport],
  exports: [transport],
})
export class TransportModule {}
