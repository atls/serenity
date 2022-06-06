import { Injectable } from '@nestjs/common'
import { Query }      from '@nestjs/graphql'

import { Search }     from '../types'

@Injectable()
export class SearchQueries {
  @Query((returns) => Search)
  search() {
    return {}
  }
}
