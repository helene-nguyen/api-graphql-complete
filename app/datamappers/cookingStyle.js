//~import modules
import { CoreDataMapper } from './coreDataMapper.js';
import { client } from '../db/pg.js';

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
}

//~export module
const CookingStyleDataMapper = new CookingStyle(client);
export { CookingStyleDataMapper };
