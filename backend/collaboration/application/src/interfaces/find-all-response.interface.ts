import { PageInfo } from './page-info.interface'

export interface FindAllResponse<T> {
    rows: T[]
    pageInfo: PageInfo
  }