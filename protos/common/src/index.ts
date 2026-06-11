/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path from 'path'
import { createRequire } from 'node:module'

const name = '@protos/common'

declare const __non_webpack_require__: any

const runtimeRequire = typeof __non_webpack_require__ !== 'undefined'
  ? __non_webpack_require__
  : createRequire(import.meta.url)

const protosPath = path.dirname(runtimeRequire.resolve(name))

export const PROTO_PATH = path.join(protosPath, '../common.proto')
