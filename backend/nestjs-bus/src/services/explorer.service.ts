import { Injectable }       from '@nestjs/common'
import { Type }             from '@nestjs/common'
import { InstanceWrapper }  from '@nestjs/core/injector/instance-wrapper.js'
import { Module as NestModule } from '@nestjs/core/injector/module.js'
import { ModulesContainer } from '@nestjs/core/injector/modules-container.js'

import { HANDLES_MESSAGE_METADATA } from '../decorators/constants.js'

@Injectable()
export class ExplorerService {
  constructor(private readonly modulesContainer: ModulesContainer) {}

  explore(): { events: Array<Type<any>> } {
    const modules = [...this.modulesContainer.values()]
    const events = this.flatMap(modules, (instance) => this.filterProvider(instance, HANDLES_MESSAGE_METADATA))

    return { events }
  }

  flatMap<T>(modules: Array<NestModule>, callback: (instance: InstanceWrapper) => Type<any> | undefined): Array<Type<T>> {
    const items = modules
      .map((module) => [...module.providers.values()].map(callback))
      .reduce<Array<Type<T> | undefined>>((acc, item) => acc.concat(item as Array<Type<T> | undefined>), [])

    return items.filter((element): element is Type<T> => Boolean(element))
  }

  filterProvider(wrapper: InstanceWrapper, metadataKey: string): Type<any> | undefined {
    const { instance } = wrapper

    if (!instance) {
      return undefined
    }

    return this.extractMetadata(instance, metadataKey)
  }

  extractMetadata(instance: object, metadataKey: string): Type<any> | undefined {
    if (!('constructor' in instance)) {
      return undefined
    }

    const metadata = Reflect.getMetadata(metadataKey, instance.constructor)

    return metadata ? (instance.constructor as Type<any>) : undefined
  }
}
