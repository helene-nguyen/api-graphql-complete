//~relations

const Restaurant = {
  city(parent, _, { dataSources }) {
    return dataSources.orestoDB.cities.findByPk(parent.city_id);
  },

  manager(parent, _, { dataSources }) {
    return dataSources.orestoDB.managers.findByPk(parent.manager_id);
  },

  //! many to many with cooking style => schema
  cookingStyles(parent, _, { dataSources }) {
    return dataSources.orestoDB.cookingStyles.findByRestaurant(parent.id);
  }
};

export { Restaurant };