//~import modules
import { CoreDataMapper } from './coreDataMapper.js';
import { client } from '../db/pg.js';

//~create class
class City extends CoreDataMapper {
  tableName = 'city';
}

//~export module
const CityDataMapper = new City(client);
export { CityDataMapper };
