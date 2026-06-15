import { ClientOptions }              from '@nestjs/microservices'
import { Transport }                  from '@nestjs/microservices'

import { PROTO_PATH as COMMON_PROTO } from '@protos/common'
import { resolveProtoPath }           from '@protos/common'

export const PROTO_PATH = resolveProtoPath('@protos/portfolio', 'portfolio.proto')

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'portfolio',
    url: process.env.PORTFOLIO_SERVICE_URL || 'portfolio-service:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}

export const serverOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'portfolio',
    url: process.env.PORTFOLIO_SERVICE_URL || '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}
