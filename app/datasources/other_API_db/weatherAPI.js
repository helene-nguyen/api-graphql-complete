import { RESTDataSource } from 'apollo-datasource-rest';

class WeatherAPI extends RESTDataSource {
  //!always call super !!!!
  constructor() {
    super();
    //Sets the base URL for the REST API
    this.baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/';
  }

  async getWeatherByCity(position) {
    //return the API
    //api call
    //
    // ### TEST weather API
    // GET http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Egf1hkjXCK8bKk3iTgjPvH3NV92uf7ES&q=-72.9477%2C7.4994 HTTP/1.1

    return await this.get('search',{
        q:position.x+","+position.y,
        apikey: process.env.API_KEY
    });
  }
}

export {WeatherAPI};