import {ISharePointRepository} from './ISharePointRepository'
import SPListItem from './SPListItem'

export interface ISharePointRepository {
  getListItem(): SPListItem[]
}

export default class MockSharePointRepository implements ISharePointRepository {
  getListItem() {
    var result = [];
    var data = new SPListItem();
    data.id = 1;
    data.name = "Test Item";
    result.push(data);
    return result;
  }
}