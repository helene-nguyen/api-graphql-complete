//~import modules
import { CoreDataMapper } from './coreDataMapper.js';
import { client } from '../db/pg.js';
import DataLoader from 'dataloader';

class Restaurant extends CoreDataMapper {
  tableName = 'restaurant';

  async findByManager(managerId) {
    const preparedQuery = {
      text: `
                SELECT *
                FROM "${this.tableName}"
                WHERE "manager_id" = $1`,
      values: [managerId]
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async findByCity(cityId) {
    const preparedQuery = {
      text: `
                SELECT *
                FROM "${this.tableName}"
                WHERE "city_id" = $1`,
      values: [cityId]
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  // ApolloServer nous apporte des fonctionnalités en plus dont l'utilisation de datasource et dataloader pour optimisés les requetes
  // express est la pour simplifié node js (on peut utiliser apolloServer juste pour ca fonctionnalité de datasource)

  // Méthode lié au dataLoader
  async createLoader() {
    // super.createLoader();
    //mise en place d'une jointure
    this.cityIdLoader = new DataLoader(async ids => {
      // Tableau d'id
      // je vais aller chercher la ville par son id
      const records = await this.findByCity(ids);

      const result = ids.map(id => records.filter(record => record.id == id));
      return result;
    });
  }
}

const RestaurantDataMapper = new Restaurant(client);
export { RestaurantDataMapper };
