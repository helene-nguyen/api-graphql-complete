// https://blog.ineat-group.com/2019/11/agreger-vos-reponses-dapi-avec-graphql/
//? Un resolver contient 4 arguments : 
// parent: Un objet qui contient les résultats retournés par un resolver sur le parent. Nous y reviendrons dans la suite du tutoriel
// args: Les arguments passés au champ
// context: Un objet qui est partagé entre tous les resolvers
// info: Information concernant l’état d’exécution de l’opération
// Pour éviter d’avoir { dataSources }: any, déclarez une interface GlobalContext qui va définir les datasources.
const Query = {
  //& ____________________RESTAURANT
  getAllRestaurants(parent, args, { dataSources }, info) {
    return dataSources.orestoDB.restaurants.findAll();
  },
  // source :https://www.apollographql.com/blog/graphql/filtering/how-to-search-and-filter-results-with-graphql/
  getRestaurant(parent, { id }, { dataSources }, info) {
    return dataSources.orestoDB.restaurants.findByPk(id);
  },

  getRestaurantByCookingStyle(parent, { label }, { dataSources }, info) {
    return dataSources.orestoDB.restaurants.findByCookingStyle(label);
  },

  //& ____________________MANAGER
  getAllManagers(parent, { id }, { dataSources }, info) {
    return dataSources.orestoDB.managers.findAll();
  },
  getManager(parent, { id }, { dataSources }, info) {
    return dataSources.orestoDB.managers.findByPk(id);
  },

  //& ____________________CITY
  getAllCities(parent, args, { dataSources }, info) {
    return dataSources.orestoDB.cities.findAll();
  },
  getCity(parent, { id }, { dataSources }, info) {
    return dataSources.orestoDB.cities.findByPk(id);
  },

  //& ____________________COOKING STYLE
  getCookingStyles(parent, { id }, { dataSources }, info) {
    return dataSources.orestoDB.cookingStyles.findAll();
  },

  getStyleByName(parent, { label }, { dataSources }, info) {
    return dataSources.orestoDB.cookingStyles.findByName(label);
  }
};

export { Query };
