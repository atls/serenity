import { Module }    from '@nestjs/common'

import { Transport } from './Transport.js'

type AwsSdkModule = typeof import('aws-sdk')

type AwsSdkImport = AwsSdkModule & {
  default?: AwsSdkModule
}

const getAwsSdk = async (): Promise<AwsSdkModule> => {
  const awsSdk = (await import('aws-sdk')) as AwsSdkImport

  return awsSdk.default || awsSdk
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

const getSesOptions = async () => {
  const { SES } = await getAwsSdk()

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
  useFactory: async () =>
    new Transport(
      process.env.SENDER || 'no-reply@example.com',
      process.env.NODE_ENV === 'production' ? await getSesOptions() : getMailhogOptions()
    ),
}

@Module({
  providers: [transport],
  exports: [transport],
})
export class TransportModule {}
