import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
  url: 'https://graphigo.prd.galaxy.eco/query ',
  exchanges: [cacheExchange, fetchExchange],
})