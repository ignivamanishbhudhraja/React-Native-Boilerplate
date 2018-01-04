Object.defineProperty(exports, "__esModule", { value: true });
var _apolloCacheInmemory = require("apollo-cache-inmemory");
var fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: "INTERFACE",
          name: "User",
          possibleTypes: [
            { role: "Individual" },
            { role: "Manager" },
            { role: "TeamMember" },
            { role: "Consumer" }
          ]
        }
      ]
    }
  }
});
var cache = new _apolloCacheInmemory.InMemoryCache({
  dataIdFromObject: function dataIdFromObject(o) {
    if (o.user_id) {
      return o.user_id;
    }
    return o._id;
  },
  addTypename: true,
  cacheResolvers: {},
  fragmentMatcher: fragmentMatcher
});
exports.default = cache;
