import { PageInfo } from './page-info.interface.js'

export interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}
