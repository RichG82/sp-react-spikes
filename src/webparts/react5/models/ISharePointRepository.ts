import SPListItem from './SPListItem'

export interface ISharePointRepository {
  getListItem(): SPListItem[]
}

