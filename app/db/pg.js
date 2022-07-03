//~logger
import debug from 'debug';
const logger = debug('SQL : log');

import pg from 'pg';

const pool = new pg.Pool();

let queryCount = 0;

const client =  {

  originalClient: pool,

  async query(...params) {
    // debug(...params);
    queryCount += 1;
    logger(`Req n°${queryCount}`);

    return this.originalClient.query(...params);
  }
};

export { client };
