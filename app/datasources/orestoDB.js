import { SQLDataSource } from 'datasource-sql';
import { RestaurantDataMapper } from '../datamappers/restaurant.js';
import { ManagerDataMapper } from '../datamappers/manager.js';
import { CityDataMapper } from '../datamappers/city.js';
import { CookingStyleDataMapper } from '../datamappers/cookingStyle.js';

class RestoDB extends SQLDataSource {
  constructor(config) {
    //super = constructor du parent
    super(config);
    //on va créer un intermédiaire au sein de chaque datamapper
    //on va créer les loaders
    this.restaurants = RestaurantDataMapper;
    this.managers = ManagerDataMapper;
    this.cities = CityDataMapper;
    this.cookingStyles = CookingStyleDataMapper;
  }

  //pour chaque datasource son propre loader pour optimiser les requêtes
  createLoaders() {
    this.restaurants.createLoader();
    // this.managers.createLoader();
    // this.cities.createLoader();
    // this.cookingStyles.createLoader();
  }
}

export { RestoDB };
