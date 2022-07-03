//~import modules
import { CoreDataMapper } from './coreDataMapper.js';
import { client } from '../db/pg.js';
import DataLoader from 'dataloader';

//~create class
class CookingStyle extends CoreDataMapper {
  tableName = 'cooking_style';

  async findByRestaurant(restaurantId) {
    const preparedQuery = {
      text: `
                SELECT *
                FROM "${this.tableName}"
                JOIN "restaurant_has_cooking_style" ON "restaurant_has_cooking_style"."cooking_style_id" = "cooking_style"."id"
                WHERE "restaurant_id" = $1;`,
      values: [restaurantId]
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async findByName(label) {
    const preparedQuery = {
      text: `
                SELECT *
                FROM "${this.tableName}"
                WHERE "label" = $1;`,
      values: [label]
    };
    const result = await this.client.query(preparedQuery);
    return result.rows[0];
  }

  //! LOADER (for datas)
  async createLoader() {
    // super.createLoader();
    //todo ask why ?
    //tableau d'id car pour tous les restaurant, on veut la ville
    // ids => tableau d'id, s'il en trouve un ou plusieurs, il le renvoie
    this.cityIdLoader = new DataLoader(async ids => {
      //on réutilise une méthode existante
      const records = await this.findByRestaurant(ids);

      // on attend un retour de tableau
      return ids.map(id => records.filter(record => record.id === id));
    });
  }
}

//~export module
const CookingStyleDataMapper = new CookingStyle(client);
export { CookingStyleDataMapper };
