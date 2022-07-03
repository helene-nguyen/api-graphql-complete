//~import modules
import { CoreDataMapper } from './coreDataMapper.js';
import { client } from '../db/pg.js';

//~create class
class Manager extends CoreDataMapper {
  tableName = 'manager';
}

//~export module
const ManagerDataMapper = new Manager(client);
export { ManagerDataMapper };
