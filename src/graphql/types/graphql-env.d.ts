/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: 'Query';
  mutation: never;
  subscription: never;
  types: {
    'Boolean': unknown;
    'Campaign': { kind: 'OBJECT'; name: 'Campaign'; fields: { 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'endTime': { name: 'endTime'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'formula': { name: 'formula'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'numNFTMinted': { name: 'numNFTMinted'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'numberID': { name: 'numberID'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'startTime': { name: 'startTime'; type: { kind: 'SCALAR'; name: 'Int'; ofType: null; } }; 'thumbnail': { name: 'thumbnail'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'ID': unknown;
    'Int': unknown;
    'Query': { kind: 'OBJECT'; name: 'Query'; fields: { 'campaign': { name: 'campaign'; type: { kind: 'OBJECT'; name: 'Campaign'; ofType: null; } }; }; };
    'String': unknown;
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}