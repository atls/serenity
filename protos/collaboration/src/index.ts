/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path                           from 'path'
import { createRequire } from 'node:module'

import { ClientOptions }              from '@nestjs/microservices'
import { Transport }                  from '@nestjs/microservices'
import { PROTO_PATH as COMMON_PROTO } from '@protos/common'

const name = '@protos/collaboration'

declare const __non_webpack_require__: any

const runtimeRequire = typeof __non_webpack_require__ !== 'undefined'
  ? __non_webpack_require__
  : createRequire(import.meta.url)

const protosPath = path.dirname(runtimeRequire.resolve(name))

export const PROTO_PATH = path.join(protosPath, '../collaboration.proto')

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'collaboration',
    url: process.env.COLLABORATION_SERVICE_URL || 'collaboration-service:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      objects: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}

export const serverOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'collaboration',
    url: process.env.COLLABORATION_SERVICE_URL || '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      objects: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}
