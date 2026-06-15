import { ClientOptions }              from '@nestjs/microservices'
import { Transport }                  from '@nestjs/microservices'
import { loadSync }                   from '@grpc/proto-loader'
import grpc                           from '@grpc/grpc-js'

import { PROTO_PATH as COMMON_PROTO } from '@protos/common'
import { resolveProtoPath }           from '@protos/common'

export const PROTO_PATH = resolveProtoPath('@protos/identity', 'identity.proto')

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'identity',
    url: process.env.IDENTITY_SERVICE_URL || 'identity-service:50051',
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
    package: 'identity',
    url: process.env.IDENTITY_SERVICE_URL || '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}

export const createIdentityService = () => {
  const packageDefinition = loadSync(clientOptions.options.protoPath, clientOptions.options.loader)
  const { identity }: any = grpc.loadPackageDefinition(packageDefinition)

  return new identity.IdentityService(clientOptions.options.url, grpc.credentials.createInsecure())
}
