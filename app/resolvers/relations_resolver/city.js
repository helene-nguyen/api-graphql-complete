//~relations
const City = {
  restaurants(parent, _, { dataSources }) {
    return dataSources.orestoDB.restaurants.findAll({ $where: { city_id: parent.id } });
  },

  weather(parent, _, { dataSources }) {
    //position by city
    return dataSources.weatherAPI.getWeatherByCity(parent.geopos);
  }
};

export { City };
