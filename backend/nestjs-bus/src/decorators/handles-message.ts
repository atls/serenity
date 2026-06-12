import 'reflect-metadata'

import { HandlesMessage as NodeHandlesMessage } from '@node-ts/bus-core'

import { HANDLES_MESSAGE_METADATA }             from './constants.js'

export const HandlesMessage = (event: any): ClassDecorator => (target) => {
  NodeHandlesMessage(event)(target)
  Reflect.defineMetadata(HANDLES_MESSAGE_METADATA, event, target)
}
