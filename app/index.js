//~import modules

//~get index of schema
import { schema } from './schemas/index.js';
const typeDefs = schema;
//~get index of resolver
import * as resolvers from './resolvers/index.js';



//~datasources
import RestoDB from './datasources/orestoDB.js';
import WeatherAPI from './datasources/other_API_db/weatherAPI.js';

const orestoDB = new RestoDB({
  //config connexion DB
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
  }
});

const apolloConfig = {
  typeDefs,
  resolvers,
  dataSources: () => ({
    //instance of RestoDB
    orestoDB,
    //instance of our API third party
    weatherAPI: new WeatherAPI()
  }),
  plugins: [
      {
        //create loader to increase performance
      async requestDidStart() {
        orestoDB.createLoaders();
      }
    }
  ]
};

export { apolloConfig };
