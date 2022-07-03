//~relations
const CookingStyle = {
  restaurants(parent, args, { dataSources }) {
      return dataSources.orestoDB.restaurants.findAll();
    }   
};


export { CookingStyle };