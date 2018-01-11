/*
 * @file: apolloCache.js
 * @description: apollo cache
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';

import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

/*
 * @function : Configure fragment matcher to handle interfaces & union on client side.
 */
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'INTERFACE', //put your own INTERFACE and UNION types here!
          name: 'User',
          possibleTypes: [
            { role: 'Individual' },
            { role: 'Manager' },
            { role: 'TeamMember' },
            { role: 'Consumer' }
          ]
        }
      ]
    }
  }
});

/*
 * @Apollo Cache InMemory Configurations.
 */
const cache = new InMemoryCache({
  dataIdFromObject: o => {
    // custom idGetter based on this id data will be stroed in cache memory.
    if (o.user_id) {
      return o.user_id;
    }
    return o._id;
  },
  addTypename: true,
  cacheResolvers: {},
  fragmentMatcher
});

export default cache;
