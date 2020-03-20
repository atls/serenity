import { Args, Query }              from '@nestjs/graphql'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, OnModuleInit } from '@nestjs/common'

import { Some }                     from '../types'

@Injectable()
export class SomeQueries implements OnModuleInit {
  onModuleInit() {
    console.log('kek')
  }

  @Query(returns => Some)
  some() {
    return {
      id: 10,
      name: 'haha',
    }
  }
}
