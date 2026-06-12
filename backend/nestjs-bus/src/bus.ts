import { Injectable } from '@nestjs/common'

import { ServiceBus } from '@node-ts/bus-core/dist/service-bus/service-bus.js'

@Injectable()
export class Bus extends ServiceBus {}
