//~environment
import 'dotenv/config';

//~logger
import debug from 'debug';
const logger = debug('ENTRYPOINT');

//~import modules
import express from 'express';
const app = express();

//~protect API
import helmet from 'helmet';
app.use(helmet());

import { ApolloServer } from 'apollo-server-express';

//~import schema and resolvers with config
import { apolloConfig } from './app/index.js';
const server = new ApolloServer(apolloConfig);

const PORT = process.env.PORT ?? 3000;

//~Start Apollo Server
async function startServer() {
//Start instance Apollo Server
  await server.start();
// Link Express with Apollo server
  server.applyMiddleware({app});

  
  await app.listen(PORT);
  logger(`🚀 Server launched on http://localhost:${PORT}`);
};

startServer();